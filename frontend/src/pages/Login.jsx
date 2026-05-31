import { useState } from "react"
import { Link } from "react-router";
import { useNavigate } from "react-router";

import { api } from "../api"

const Login = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const res = await api.post("/users/login",
                {
                    username,
                    password
                }
            )
            console.log(res.data)
            setIsLoggedIn(true)
            navigate("/")
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <div className="min-h-full w-full flex items-center justify-center bg-gray-100">

            <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Login
                </h1>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>

                <button type="submit" className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition">
                    Login
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    New user?{" "}
                    <Link
                        to="/register"
                        className="text-black font-semibold hover:underline"
                    >
                        Register here
                    </Link>
                </p>

            </form>

        </div>
    )
}

export default Login