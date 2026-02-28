[README.md](https://github.com/user-attachments/files/25620798/README.md)
# 👜 Bag Shop --- Role-Based E-Commerce Web Application

## 📌 Overview

Bag Shop is a full-stack e-commerce web application built using Node.js,
Express, EJS, and Tailwind CSS.

The platform supports two login modes: 
- 👤 User Mode --- Browseproducts, add to cart, and purchase. 
- 🔐 Admin Mode --- Manage products, update pricing, and control listings.

This project demonstrates authentication, role-based access control, and
CRUD operations in a real-world shopping application.

------------------------------------------------------------------------

## 🚀 Features

### 👤 User Features

-   User registration & login
-   Browse available bags
-   Add products to cart
-   Remove items from cart
-   Checkout functionality

### 🔐 Admin Features

-   Admin login
-   Add new products
-   Update product price
-   Delete products
-   View all product listings

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   Backend: Node.js, Express.js
-   Frontend: EJS (Embedded JavaScript Templates)
-   Styling: Tailwind CSS
-   Authentication: Session-Based Authentication
-   Database: Local Storage

------------------------------------------------------------------------

## 📂 Project Structure

```Bag-Shop/ 
├── api/ 
├── config/ 
├── controller/ 
├── images/ 
├── middlewares/ 
├── models/ 
├── routers/ 
├── utils/ 
├── views/ 
│     ├── admin/
│     └── user/ 
├── app.js 
├── package.json 
└── README.md
```
------------------------------------------------------------------------

## ⚙️ Installation & Setup

1.  Clone the repository git clone
    https://github.com/Bansal-Karan/Bag-Shop.git

2.  Navigate into the project directory cd Bag-Shop

3.  Install dependencies npm install

4.  Start the server npm start

5.  Open in browser http://localhost:3000

------------------------------------------------------------------------

## 🔐 Role-Based Authentication

-   Users can access shopping and cart features.
-   Admins have exclusive access to product management routes.
-   Middleware ensures protected routing and prevents unauthorized
    access.

------------------------------------------------------------------------

## 📊 Key Concepts Demonstrated

-   MVC Architecture
-   Role-Based Access Control
-   CRUD Operations
-   Session Management
-   Server-Side Rendering with EJS
-   Responsive UI using Tailwind CSS

------------------------------------------------------------------------

## 🔮 Future Improvements

-   Online payment integration (Stripe/Razorpay)
-   Order history page
-   Product image upload functionality
-   Search & filter products
-   Admin analytics dashboard

------------------------------------------------------------------------

## 👨‍💻 Author

Karan Bansal\
Computer Science Engineering Student
