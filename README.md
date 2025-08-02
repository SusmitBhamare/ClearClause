# 🚀 ClearClause AI

> **Intelligent Contract Analysis Platform**  
> Transform how legal professionals handle contracts with AI-powered analysis, risk assessment, and automated insights.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📦 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🎯 Usage](#-usage)
- [🔧 API Endpoints](#-api-endpoints)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

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

## 📦 Installation

### Detailed Setup Instructions

#### 1. **Database Setup**
```bash
# MongoDB Atlas (Recommended)
# 1. Create a free cluster at https://cloud.mongodb.com
# 2. Get your connection string
# 3. Add to server/.env

# Local MongoDB (Alternative)
# 1. Install MongoDB locally
# 2. Start MongoDB service
# 3. Use connection string: mongodb://localhost:27017/clearclause
```

#### 2. **Redis Setup**
```bash
# Upstash Redis (Recommended)
# 1. Create account at https://upstash.com
# 2. Create Redis database
# 3. Get URL and token
# 4. Add to server/.env

# Local Redis (Alternative)
# 1. Install Redis locally
# 2. Start Redis service
# 3. Use connection string: redis://localhost:6379
```

#### 3. **Google Gemini API**
```bash
# 1. Go to https://makersuite.google.com/app/apikey
# 2. Create API key
# 3. Add to server/.env as GOOGLE_GENAI_API_KEY
```

#### 4. **Stripe Setup** (Optional)
```bash
# 1. Create account at https://stripe.com
# 2. Get publishable and secret keys
# 3. Add to environment variables
```

---

## ⚙️ Configuration

### Environment Variables

#### **Server (.env)**
```env
# AI Configuration
GOOGLE_GENAI_API_KEY=your_gemini_api_key

# Database
MONGODB_URI=your_mongodb_connection_string

# Redis
UPSTASH_REDIS_URL=your_redis_url
UPSTASH_REDIS_TOKEN=your_redis_token

# Server
PORT=8080
CLIENT_URL=http://localhost:3000

# Authentication
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret

# Payments (Optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# Email (Optional)
RESEND_API_KEY=your_resend_api_key
```

#### **Client (.env.local)**
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

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

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Susmit Bhamare**

- **GitHub**: [@SusmitBhamare](https://github.com/SusmitBhamare)
- **LinkedIn**: [susmitbhamare](https://linkedin.com/in/susmitbhamare)
- **Email**: susmit.bhamare@example.com

### **About the Developer**
Full Stack Developer & AI Enthusiast with expertise in building AI-powered web applications. ClearClause AI represents the vision to transform the legal tech industry by making contract analysis more accessible and efficient through cutting-edge AI technology.

---

## 🙏 Acknowledgments

- **Google Gemini API** for advanced AI capabilities
- **Next.js Team** for the amazing React framework
- **MongoDB Atlas** for reliable cloud database
- **Upstash** for Redis-as-a-Service
- **Stripe** for secure payment processing

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/SusmitBhamare/ClearClause?style=social)](https://github.com/SusmitBhamare/ClearClause)
[![GitHub forks](https://img.shields.io/github/forks/SusmitBhamare/ClearClause?style=social)](https://github.com/SusmitBhamare/ClearClause)
[![GitHub issues](https://img.shields.io/github/issues/SusmitBhamare/ClearClause)](https://github.com/SusmitBhamare/ClearClause/issues)

</div> 