# BeyondChats Assignment – Full Stack Project

This project is a **full-stack assignment** consisting of:

- **Backend:** Laravel (API + Web Scraping)
- **Frontend:** React (Vite)
- **Database:** SQLite

The backend scrapes the latest articles from the BeyondChats blog and exposes them via REST APIs.  
The frontend fetches and displays those articles.

---

## 🚀 Tech Stack

### Backend
- Laravel 10
- PHP 8.1
- SQLite database
- Laravel HTTP Client (for scraping)

### Frontend
- React 18
- Vite
- Fetch API

---

## 📂 Project Structure


---

## ⚙️ Backend Setup (Laravel)

### 1️⃣ Install dependencies
```bash
cd backend-laravel
composer install
## ⚙️ Backend Setup (Laravel)

### 1️⃣ Install dependencies
```bash
cd backend-laravel
composer install
2️⃣ Environment setup
Create .env file:

cp .env.example .env
php artisan key:generate
Set database to SQLite in .env:

env
Copy code
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
3️⃣ Create database file

mkdir database
type nul > database/database.sqlite
4️⃣ Run migrations

php artisan migrate
5️⃣ Scrape articles

php artisan scrape:beyondchats
6️⃣ Start backend server

php artisan serve
Backend will run at:

cpp
Copy code
http://127.0.0.1:8000
API Endpoint:

GET /api/articles/latest
🎨 Frontend Setup (React + Vite)
1️⃣ Install dependencies
cd frontend
npm install
2️⃣ Start frontend
npm run dev
Frontend will run at:

http://localhost:5173
🔗 API Used by Frontend

http://127.0.0.1:8000/api/articles/latest

Articles are scraped from: https://beyondchats.com/blogs/

Backend handles scraping + storage

Frontend only consumes API

SQLite used for simplicity
