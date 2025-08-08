<h1 align="center"># 🛍️ Viorra – Beauty E-commerce App</h1>

minimal cosmetic e-commerce app

---

## 📚 Table of Contents

- [✨ Introduction](#-introduction)
- [🚀 Get Started](#-get-started)
  - [📦 Backend Setup (Spring Boot)](#-backend-setup-spring-boot)
  - [🛍️ Frontend Setup (React - Vite)](#-frontend-setup-react)
- [📂 Project Structure](#-project-structure)
- [🛠️ Technologies Used](#️-technologies-used)
---

## ✨ Introduction

Viorra is a modern shopping platform that enables users to:

- Register and authenticate
- Browse and search products
- Add, update, and remove items in the cart
- Place and track orders via PayPal
- Post and view product reviews

It is composed of:
- A **Spring Boot** backend for handling users, products, cart, and orders
- A **React (Vite)** frontend 

---

## 🚀 Get Started

### 📦 Backend Setup (Spring Boot)

1. Clone the repo:
   ```bash
   git clone https://github.com/quantambites/ReactAssignmentEcom.git
   cd ecommerce/server
   ```

2. Install dependencies and run:
   - Using Maven:
     ```bash
     ./mvnw clean install
     ./mvnw spring-boot:run
     ```

   - Or via your IDE (IntelliJ/VSCode): Run `EcommerceServerApplication.java`

---

### 📱 Frontend Setup (React - Vite)

1. Navigate to frontend directory:
   ```bash
   cd ecommerce/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables (see below) , remove the firebase hosting files

4. Start the app:
   ```bash
   npm run dev
   ```

---


## 📂 Project Structure

```
ecommerce/
│
├── server/              # Spring Boot backend
│   └── src/main/java/   # Controllers, Services, Models, Repositories, Config
│
├── client/              # React frontend (Firebase ready)
│   └── src/             # Components, Pages, Redux slices, Utils
│
├── .gitignore
└── README.md
```

---

## 🛠️ Technologies Used

- **Frontend:** React + Vite + Redux Toolkit + Axios
- **Backend:** Spring Boot + MongoDB + Cloudinary + Redis
- **Auth:** Cookie-based JWT Auth
- **Database:** MongoDB Atlas
- **Image Hosting:** Cloudinary
- **Payments:** PayPal (sandbox)
- **Caching:** Redis cloud


---





<p align="center">
  <img src="home.png" alt="App Screenshot" width="500"/>
</p>
