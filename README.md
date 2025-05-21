# 📘 Project Overview

This project is a lightweight web-based SQL playground built with PGlite, featuring persistent SQLite storage via IndexedDB, real-time cross-tab synchronization, and a modern UI with theme toggling support. The application is designed to let users experiment with raw SQL queries while managing and storing data directly in the browser.

## 🛠️ Tech Stack

- **Frontend:** React + JavaScript (Vite 6)
- **State Management:** React Context / Local State
- **Styling:** Tailwind CSS
- **Database:** PGlite (SQLite in the browser)
- **Persistence:** IndexedDB
- **Real-Time Sync:** PGliteWorker + live queries

## 🌟 Features

💻 Run raw SQL queries directly using the PGlite REPL

📄 Supports all standard SQL commands: SELECT, INSERT, UPDATE, DELETE, etc.

👨‍⚕️ Add and manage patients with data stored in the PGlite SQLite database

🌐 Persistent storage via IndexedDB

🔁 Real-time synchronization between multiple tabs using PGliteWorker and live queries

🌗 Toggle between light and dark themes for a personalized experience

🧪 Example SQL queries included to help you get started

## 🚀 Setup & Usage

1. Clone the Repository:
```bash
git clone [your-repository-url]
cd patient-registration-system
```

2. Install Dependencies:
```bash
npm install
```

3. Run the Development Server:
```bash
npm run dev
```

4. Open in Browser:
Navigate to: http://localhost:5173

## ⚙️ Assumptions

- No authenticationa (focus is on core features)
- SQL Console and Patient Records are on separate pages
- User's browser must support IndexedDB
- User should be familiar with basic SQL
- All functionality is handled 100% client-side

## ⚠️ Challenges Faced & Solutions

### 1. Persisting SQLite in Browser
**Challenge:** PGlite runs SQLite in the browser, but data persistence needed to be maintained.

**Solution:** Integrated IndexedDB with PGlite to persist the database across sessions.

### 2. Tab Synchronization
**Challenge:** Keeping data consistent across multiple open tabs.

**Solution:** Used PGliteWorker and live queries to enable real-time synchronization.

### 3. Dynamic SQL Console
**Challenge:** Execute and validate SQL commands written by the user

**Solution:** Leveraged PGlite REPL and added user-friendly error messages

## 💡 Future Enhancements

- 🔎 Add patient search and filter capabilities
- 📤 Export patient data as CSV
- 🔐 Optional user authentication
- 💾 Save reusable SQL queries
- 📱 Improve mobile responsiveness

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team. 
