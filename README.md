# ApplyNow

A full-stack job portal for candidates and recruiters. Candidates can browse and apply for jobs, while recruiters can post jobs, manage listings, and review applicants.

## Features

### Authentication

* Register, Login, Logout
* JWT-based Authentication
* Protected Routes

### Candidate

* Browse Jobs
* View Job Details
* Apply for Jobs
* View Applied Jobs

### Recruiter

* Post Jobs
* Manage Posted Jobs
* View Applicants
* View Applicant Profiles

## Tech Stack

| Frontend     | Backend              | Database |
| ------------ | -------------------- | -------- |
| React + Vite | Node.js + Express.js | MongoDB  |
| React Router | JWT Authentication   | Mongoose |
| Tailwind CSS | bcryptjs             |          |

## Installation

### Clone Repository

```bash
git clone https://github.com/Anubhav505/applynow.git
```

### Backend

```bash
cd backend
pnpm install
nodemon app.js
```

### Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

## Environment Variables

### Backend

```env
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
PORT=5000
```

### Frontend

```env
VITE_API_URL=your_backend_url
```

## Project Status

Completed:

* Authentication System
* Job Management
* Job Applications
* Applicant Management
* CRUD Operations

## Author

Anubhav
