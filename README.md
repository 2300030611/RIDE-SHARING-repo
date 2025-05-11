
# 🚖 AGRides – Ride Sharing Web Application

**AGRides** is a full-stack ride-sharing web app built using **React** on the frontend and **Spring Boot** on the backend. It allows users to sign up, log in, book rides, track them live, make payments, and view their ride history.

---

## 🔧 Tech Stack

### Frontend
- React (with React Router)
- CSS3 for custom styling
- Axios for HTTP requests

### Backend
- Spring Boot (Java)
- RESTful API services
- MySQL for database storage
- JPA/Hibernate for ORM

---

## ✅ Features

- 🔐 User Signup & Login
- 🚕 Book rides (Auto, Bike, Cab)
- 📍 Live tracking simulation
- 💳 Flexible payment methods (Cash, UPI, Wallet, Card)
- 📜 Ride history records
- 🧾 Bill breakdown with tax/service charges
- 🔄 Smooth navigation with splash screen and protected routes
- 🎨 Responsive and clean UI

---

## 🗂️ Project Structure

### Frontend

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── HomeScreen.jsx
│   │   ├── RideConfirmation.jsx
│   │   ├── LiveTracking.jsx
│   │   ├── PaymentPage.jsx
│   │   ├── RideHistory.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Navbar.jsx
│   │   └── SplashScreen.jsx
│   ├── css/
│   └── App.jsx
```

### Backend

```
backend/
└── src/main/java/com/example/aws/
    ├── config/
    ├── controller/
    ├── dao/
    ├── models/
    ├── service/
    └── AwsApplication.java
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js & npm
- Java 17+
- Spring Boot
- MySQL
- Maven

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/ag-rides.git
cd ag-rides
```

### 2. Setup Backend

- Create MySQL database named `aws`
- Configure credentials in `src/main/resources/application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/aws
spring.datasource.username=root
spring.datasource.password=ROOT
```

- Run the Spring Boot backend

```bash
cd backend
./mvnw spring-boot:run
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📌 Upcoming Improvements

- 🔑 Email-based OTP verification
- 🗺️ Real-time map tracking via Google Maps API
- 📱 PWA support for mobile responsiveness
- 🧑‍✈️ Driver dashboard and ratings
- 🌟 Dark mode and theme customization
- 📧 Email notifications on ride updates

---

## 📝 License

This project is licensed under the MIT License.
