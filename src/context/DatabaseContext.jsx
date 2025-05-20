import { createContext, useContext, useEffect, useState } from 'react';
import { PGliteWorker } from '@electric-sql/pglite/worker';
import { live } from '@electric-sql/pglite/live';

const DatabaseContext = createContext(null);

export function DatabaseProvider({ children }) {
  const [db, setDb] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initDatabase() {
      try {
        const worker = new Worker(
          new URL('../worker/pglite-worker.js', import.meta.url),
          { type: 'module' }
        );

        const pg = new PGliteWorker(worker, {
          extensions: {
            live,
          },
        });

        // Wait for the database to be ready
        await pg.ready;
        setDb(pg);
      } catch (err) {
        setError(err);
        console.error('Failed to initialize database:', err);
      } finally {
        setIsLoading(false);
      }
    }

    initDatabase();
  }, []);

  const value = {
    db,
    isLoading,
    error,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
}

// Custom hook for live queries
export function useLiveQuery(query, params = [], key = 'id') {
  const { db } = useDatabase();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!db) return;

    let subscription;

    async function setupQuery() {
      try {
        setIsLoading(true);
        subscription = await db.live.incrementalQuery(
          query,
          params,
          key,
          (results) => {
            setData(results.rows);
            setIsLoading(false);
          }
        );
      } catch (err) {
        setError(err);
        setIsLoading(false);
        console.error('Live query error:', err);
      }
    }

    setupQuery();

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [db, query, JSON.stringify(params), key]);

  return { data, error, isLoading };
} 