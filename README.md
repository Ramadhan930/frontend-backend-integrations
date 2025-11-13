# 🚀 Fullstack Blog Preview (React + Express)

[![GitHub repo](https://img.shields.io/badge/repo-frontend--backend--integrations-blue?logo=github)](https://github.com/Ramadhan930/frontend-backend-integrations)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-green.svg)]()
[![Made with Node.js](https://img.shields.io/badge/backend-Node.js-brightgreen?logo=node.js)]()
[![Made with React](https://img.shields.io/badge/frontend-React-blue?logo=react)]()
[![Styling](https://img.shields.io/badge/style-Tailwind_CSS-06B6D4?logo=tailwind-css)]()
[![Axios](https://img.shields.io/badge/API-Axios-5A29E4?logo=axios)]()

---

## 🧠 Deskripsi Proyek

Proyek ini adalah implementasi sederhana integrasi **frontend (React)** dengan **backend (Express.js + Node.js)**.  
Tujuan utama proyek ini adalah untuk menampilkan data blog dari server ke tampilan web dengan menggunakan **API HTTP GET**.

Proyek ini cocok untuk:
- Pemula yang ingin belajar fullstack development
- Mahasiswa yang sedang belajar konsep REST API
- Developer yang ingin contoh sederhana integrasi React–Express

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- ⚛️ **React (Vite)**
- 🧩 **Axios** – komunikasi HTTP client
- 🎨 **Tailwind CSS** – framework CSS modern dan responsif

### 🧩 Backend
- 🟩 **Node.js**
- 🚀 **Express.js**
- 🔒 **CORS** – untuk mengizinkan komunikasi lintas domain

---

## 🧩 Arsitektur Aplikasi
Frontend (React) ---> Axios HTTP Request ---> Backend (Express) ---> JSON Response

Flow:
1. React mengirimkan request ke server Express.
2. Server Express merespons dengan data JSON (berisi daftar blog).
3. React menampilkan data tersebut ke dalam komponen UI.

---

## 📂 Struktur Folder
project-root/
├── backend/
│ ├── server.js # File utama backend (Express server)
│ ├── package.json
│ └── node_modules/
│
├── frontend/
│ ├── src/
│ │ └── App.jsx # File utama React
│ ├── package.json
│ └── node_modules/
│
├── .gitignore
└── README.md

---

## 🚀 Cara Menjalankan Proyek

### 1️⃣ Jalankan Backend (Express)
Masuk ke folder backend:
```bash
cd backend
npm install express cors
```
jalankan server 
```bash
node server.js
```
Cek di browser:
👉 http://localhost:8080

### 1️⃣ Jalankan frontend (React)
Masuk ke folder React:
```bash
cd frontend
npm install
npm run dev
```
Frontend akan berjalan di:
👉 http://localhost:5173
Hasilnya: data blog dari backend akan muncul dalam daftar postingan di UI React.

---

🧰 Fitur Utama

✅ Fetch data dari server Express menggunakan Axios
✅ Menampilkan daftar blog secara dinamis
✅ Styling responsif menggunakan Tailwind CSS
✅ Struktur project clean dan mudah dipelajari
✅ Sudah mendukung komunikasi lintas domain (CORS)
