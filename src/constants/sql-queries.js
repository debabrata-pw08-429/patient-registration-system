export const SQL_QUERIES = [
  {
    name: 'VIEW_ALL_PATIENTS',
    query: 'SELECT * FROM patients;',
    description: 'Retrieves all patient records from the database'
  },
  {
    name: 'SEARCH_BY_NAME',
    query: "SELECT * FROM patients WHERE full_name ILIKE '%John%';",
    description: 'Searches for patients with "John" in their name (case-insensitive)'
  },
  {
    name: 'COUNT_BY_GENDER',
    query: 'SELECT gender, COUNT(*) as count FROM patients GROUP BY gender;',
    description: 'Counts the number of patients grouped by gender'
  },
  {
    name: 'RECENT_REGISTRATIONS',
    query: 'SELECT * FROM patients ORDER BY created_at DESC LIMIT 5;',
    description: 'Shows the 5 most recently registered patients'
  },
  {
    name: 'PATIENTS_WITH_MEDICAL_HISTORY',
    query: "SELECT full_name, medical_history FROM patients WHERE medical_history IS NOT NULL AND medical_history != '';",
    description: 'Lists patients who have medical history recorded'
  }
];