# ApplyNow

A full-stack job portal that connects job seekers and recruiters. Candidates can browse and apply for jobs, while recruiters can post jobs, manage listings, and view applicants.

## Features

### Authentication

* User Registration
* User Login
* User Logout
* JWT Authentication
* HTTP-Only Cookies
* Protected Routes

### Candidate Features

* Browse Available Jobs
* View Job Details
* Apply for Jobs
* View Applied Jobs

### Recruiter Features

* Post New Jobs
* View Posted Jobs
* Edit Job Details
* View Applicants
* View Applicant Profiles

## Tech Stack

### Frontend

* React
* React Router
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT (JSON Web Token)
* bcryptjs
* Cookie Parser
* CORS

## Installation

### Clone Repository

```bash
git clone https://github.com/Anubhav505/applynow.git
```

### Backend Setup

```bash
cd backend

# Using pnpm (recommended)
pnpm install
nodemon app.js

# Using npm
npm install
node app.js
```

### Frontend Setup

```bash
cd frontend

# Using pnpm (recommended)
pnpm install
pnpm dev

# Using npm
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
PORT=5000
```

## API Features

* Authentication APIs
* Job Management APIs
* Job Application APIs
* Applicant Management APIs

## Current Status

Core functionality is completed:

* Authentication System
* Job Posting System
* Job Application System
* Applicant Management
* Protected Routes
* CRUD Operations

## Author

Anubhav
