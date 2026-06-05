import { Link } from "react-router"
import { api } from "../api";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

  const handleLogout = async () => {
    try {
      const res = await api.post("/users/logout")
      setIsLoggedIn(false)
      console.log(res.data.message)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <nav className="py-2 bg-white border-b px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-5 sticky top-0">

      <Link to={"/"} className="text-3xl font-bold">
        ApplyNow
      </Link>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">

        {
          isLoggedIn ? (
            <>
              <Link to="/jobs">
                Browse Jobs
              </Link>

              <Link to="/applied-jobs">
                Applied Jobs
              </Link>

              <Link to="/post-job">
                Post Job
              </Link>

              <Link to="/my-jobs">
                My Jobs
              </Link>

              <Link to="/profile">
                Profile
              </Link>

              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>

              <Link to="/register" className="bg-black text-white px-5 py-2 rounded-xl">
                Register
              </Link>
            </>
          )
        }

      </div>

    </nav>
  )
}

export default Navbar