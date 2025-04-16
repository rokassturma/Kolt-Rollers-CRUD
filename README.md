# 🛴 Kolt Scooter Rental Admin Panel

A simple admin panel built with React for managing electric scooter rentals. The system allows users to add, edit, delete, and view scooter data. All data is stored in the browser's `localStorage`, so no external database is required.

---
![screen](https://github.com/user-attachments/assets/064a48c4-2c4f-4db0-977f-3b9607eee0c7)


## 🚀 Features

- ✅ Add a new scooter with a usage date and starting kilometres
- 🔢 Automatically generates an 8-character alphanumeric `registrationCode`
- ✏️ Edit scooters using a Bootstrap modal:
  - Update the last usage date
  - Add additional kilometres
  - Mark scooter as "Busy" or "Available"
- 🗑️ Delete scooters from the list
- 📊 Real-time statistics:
  - Total number of scooters
  - Combined total ride kilometres
- 🔽 Sort scooters by:
  - Usage date (`lastUseTime`)
  - Ride distance (`totalRideKilometres`)
- 🔄 Everything updates instantly without page reloads
- 🎨 Styled with Bootstrap 5 and a custom background image

---

## 💻 Technologies Used

- [React.js](https://reactjs.org/) – component-based front-end framework
- [Bootstrap 5](https://getbootstrap.com/) – for UI design and layout
- `localStorage` – to persist data directly in the browser
- SCSS – for styling customization

---

## 🧪 How to Run the Project

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev` (or `npm start` if using Create React App)
4. Open in browser: `http://localhost:5173` (Vite) or `http://localhost:3000`

---

## 📝 Notes

- All data is stored in the browser, so it will reset if the user clears their browser storage.
- This project is intended for learning purposes and small-scale demos.
- Easily extendable with backend support or login/authentication if needed.

---

## 👨‍💻 Author

Created by [Rokas Šturma] as part of a front-end learning project.
