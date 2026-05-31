import { Link, useNavigate } from "react-router";
import { useState } from "react"

import { api } from "../api"

const Register = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            const res = await api.post("/users/register",
                { 
                    username, 
                    password 
                }
            )
            console.log(res.data.message)
            navigate("/login")
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <div className="min-h-full w-full flex items-center justify-center bg-gray-100">

            <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Register
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
                    Register
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already a user?{" "}
                    <Link
                        to="/login"
                        className="text-black font-semibold hover:underline"
                    >
                        Login here
                    </Link>
                </p>

            </form>

        </div>
    )
}

export default Register