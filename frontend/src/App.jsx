import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";

import { api } from "./api"
import ProtectedRoute from "./routes/ProtectedRoutes";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AllJobs from "./pages/AllJobs";
import PostJob from "./pages/PostJob";
import JobDetails from "./pages/JobDetails";
import AppliedJobs from "./pages/AppliedJobs";
import MyPostedJobs from "./pages/MyJobs";
import Applicants from "./pages/Applicants";
import ApplicantProfile from "./pages/ApplicantProfile";
import EditJobDetails from "./pages/EditJobDetails";

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/users/me")
        setIsLoggedIn(true)
      } catch (error) {
        console.error(error.response.data.message)
        setIsLoggedIn(false)
      }
    }
    checkAuth()
  }, [])

  return (

    <BrowserRouter>

      <div className="min-h-screen flex flex-col">

        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <main className="flex flex-1">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />} >
              <Route path="/jobs" element={<AllJobs />} />
              <Route path="/jobs/:id" element={< JobDetails />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/applied-jobs" element={<AppliedJobs />} />
              <Route path="/my-jobs" element={<MyPostedJobs />} />
              <Route path="/jobs/:id/applicants" element={<Applicants />} />
              <Route path="/applicant/:id" element={<ApplicantProfile />} />
              <Route path="/edit-job/:id" element={<EditJobDetails />} />
            </Route>
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App
