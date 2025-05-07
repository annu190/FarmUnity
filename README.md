# 🌾 FarmUnity - Connecting Farmers,Landowners and Laborers

**FarmUnity** is a MERN stack-based platform designed to bridge gaps in agricultural operations. It offers services like labor hiring, land leasing, and post-harvest management to promote sustainable and efficient farming practices, aligned with the UN's Sustainable Development Goals (SDGs).

##  Features

- 👨‍🌾 **Labor Hiring Portal** – Post jobs or apply for agricultural work.
- 🌱 **Land Leasing System** – Search and lease available lands; post your own land.
- 🧺 **Post-Harvest Storage** – Register and search for storage services to reduce wastage.
- 🔍 **Smart Search & Filters** – Easily find jobs, land, and services.

##  Tech Stack

| Frontend     | Backend       | Database | Others                 |
|--------------|---------------|----------|------------------------|
| React.js     | Node.js       | MongoDB  | Express, Axios         |
| Tailwind CSS | Express.js    | Mongoose | Multer (Image Upload)  |
| React Router | REST API      |          |                        |

## 🔧 Setup Instructions

### **1. Clone the Repository**

```bash
git clone https://github.com/yourusername/farmunity.git
cd farmunity
```

### **2. Install Dependencies**

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### **3. Environment Setup**

Create a `.env` file inside the **server** directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### **4. Run the App**

```bash
# Start Backend Server
cd server
npm start

# Start Frontend Server
cd ../client
npm start
```

Open the app in your browser at: **http://localhost:3000**

## 📁 Folder Structure

```
farmunity/
│
├── farmunity/           # React Frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
│
├── backend/           # Node.js Backend
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── README.md
└── package.json
```

##  Future Enhancements

- 📩 **SMS/Email notifications**
- 🔐 **Role-based authentication** (Farmer, Landowner, Provider)
- 📊 **Admin dashboard** to monitor postings
- 📈 **Data analytics** on land/labor utilization
