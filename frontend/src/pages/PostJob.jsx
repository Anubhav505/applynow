import { useNavigate } from "react-router";
import { useState } from "react";

import { api } from "../api"

const PostJob = () => {

    let navigate = useNavigate();
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await api.post("/jobs/create",
                {
                    title,
                    description
                }
            )
            console.log(res.data.message)
            navigate("/my-jobs")
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <div className="min-h-full w-full bg-gray-100 flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
            >
                <h1 className="text-3xl font-bold text-center mb-6">
                    Create Job
                </h1>

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-black"
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg mb-6 outline-none focus:ring-2 focus:ring-black"
                />

                <button
                    type="submit"
                    className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                    Create Job
                </button>
            </form>
        </div>
    )
}

export default PostJob