# 🚀 ClearClause AI

> **Intelligent Contract Analysis Platform**  
> Transform how legal professionals handle contracts with AI-powered analysis, risk assessment, and automated insights.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🎯 Usage](#-usage)
- [🔧 API Endpoints](#-api-endpoints)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)


---

## ✨ Features

### 🔍 **AI-Powered Contract Analysis**
- **Intelligent Document Processing**: Upload PDF, DOCX, or TXT files
- **Automatic Contract Type Detection**: AI identifies contract types (Employment, NDA, Sales, etc.)
- **Risk Assessment**: Comprehensive risk analysis with severity levels
- **Opportunity Identification**: Discover potential benefits and advantages
- **Key Clause Extraction**: Automatically identify and highlight important clauses

### 📊 **Advanced Analytics**
- **Overall Score**: AI-generated contract favorability score (1-100)
- **Visual Charts**: Interactive charts and graphs for data visualization
- **Detailed Reports**: Comprehensive analysis reports with actionable insights
- **Export Capabilities**: Download analysis results in multiple formats

### 🔐 **Security & Authentication**
- **OAuth2 Integration**: Secure Google authentication
- **Session Management**: Robust session handling with Redis
- **Data Encryption**: End-to-end encryption for sensitive documents
- **User Privacy**: GDPR-compliant data handling

### 💳 **Payment Integration**
- **Stripe Integration**: Secure payment processing
- **Subscription Plans**: Free and premium tiers
- **Usage Tracking**: Monitor API usage and limits

---

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15.2.4** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5.8.2** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Query** - Data fetching and caching
- **Zustand** - State management

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Redis** - Caching and session storage
- **Passport.js** - Authentication middleware

### **AI & ML**
- **Google Gemini API** - Advanced AI model for contract analysis
- **PDF.js** - PDF text extraction
- **NLP Processing** - Natural language processing

### **Infrastructure**
- **Upstash Redis** - Redis-as-a-Service
- **MongoDB Atlas** - Cloud database
- **Stripe** - Payment processing
- **Resend** - Email service

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** database
- **Redis** instance
- **Google Gemini API** key
- **Stripe** account (for payments)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/SusmitBhamare/ClearClause.git
   cd ClearClause
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Server (.env)
   GOOGLE_GENAI_API_KEY=your_gemini_api_key
   MONGODB_URI=your_mongodb_connection_string
   UPSTASH_REDIS_URL=your_redis_url
   UPSTASH_REDIS_TOKEN=your_redis_token
   CLIENT_URL=http://localhost:3000
   PORT=8080

   # Client (.env.local)
   NEXT_PUBLIC_API_URL=http://localhost:8080
   ```

4. **Start the development servers**
   ```bash
   # Start server (from server directory)
   npm run dev

   # Start client (from client directory)
   npm run dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:8080

---

## 🎯 Usage

### **1. Upload Contract**
- Navigate to the dashboard
- Drag and drop your contract file (PDF, DOCX, TXT)
- Wait for AI analysis to complete

### **2. Review Analysis**
- View contract type detection
- Examine risk assessment with severity levels
- Review opportunity analysis
- Check overall favorability score

### **3. Export Results**
- Download comprehensive analysis report
- Share insights with team members
- Use data for contract negotiations

### **4. Manage Subscriptions**
- Upgrade to premium for advanced features
- Monitor usage and billing
- Access priority support

---

## 🔧 API Endpoints

### **Authentication**
```http
POST /auth/google          # Google OAuth login
GET  /auth/current-user    # Get current user
POST /auth/logout          # Logout user
```

### **Contracts**
```http
POST /contracts/detect-type # Detect contract type
POST /contracts/analyze     # Analyze contract
GET  /contracts/user-contracts # Get user's contracts
GET  /contracts/contract/:id   # Get specific contract
```

### **Payments**
```http
POST /payment/create-checkout-session # Create Stripe session
POST /payment/webhook                 # Stripe webhook
```

---

## 📁 Project Structure

```
ClearClause/
├── client/                 # Next.js frontend
│   ├── src/
│   │   ├── app/           # App Router pages
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom hooks
│   │   ├── interfaces/    # TypeScript interfaces
│   │   ├── lib/          # Utility functions
│   │   ├── providers/    # Context providers
│   │   └── store/        # Zustand store
│   ├── public/           # Static assets
│   └── package.json
├── server/                # Express.js backend
│   ├── src/
│   │   ├── config/       # Configuration files
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Express middleware
│   │   ├── models/       # Mongoose models
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   └── utils/        # Utility functions
│   └── package.json
└── README.md
```

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/SusmitBhamare/ClearClause?style=social)](https://github.com/SusmitBhamare/ClearClause)
[![GitHub forks](https://img.shields.io/github/forks/SusmitBhamare/ClearClause?style=social)](https://github.com/SusmitBhamare/ClearClause)
[![GitHub issues](https://img.shields.io/github/issues/SusmitBhamare/ClearClause)](https://github.com/SusmitBhamare/ClearClause/issues)

</div> 
