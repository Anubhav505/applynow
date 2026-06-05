import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import { api } from "../api"

const EditJobDetails = () => {

  const navigate = useNavigate()

  const { id } = useParams()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await api.get(`/jobs/getJobForEdit/${id}`)
        setTitle(res.data.title)
        setDescription(res.data.description)
      } catch (error) {
        if (error.response?.status === 403) {
          navigate("/jobs")
        }
      }
    }
    fetchJobDetails()
  }, [id])

  const handleUpdateJobDetails = async (e) => {
    e.preventDefault()
    const res = await api.put(`/jobs/update/${id}`,
      {
        title,
        description
      }
    )
    console.log(res.data.message)
  }

  const handleDeleteJob = async () => {
    const res = await api.delete(`/jobs/delete/${id}`)
    console.log(res.data.message)
    navigate("/my-jobs")
  }

  return (
    <div className="min-h-full w-full bg-gray-100 p-5 md:p-8">

      <div className="w-full max-w-3xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Edit Job
        </h1>

        <form onSubmit={handleUpdateJobDetails} className="space-y-5">

          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Job Title"
            className="w-full bg-white px-4 py-3 md:py-4 rounded-2xl outline-none"
          />

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Job Description"
            className="w-full bg-white px-4 py-3 md:py-4 rounded-2xl min-h-40 resize-none outline-none"
          />

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-xl cursor-pointer"
            >
              Update Job
            </button>

            <button
              type="button"
              onClick={handleDeleteJob}
              className="bg-red-100 text-red-600 px-6 py-3 rounded-xl cursor-pointer"
            >
              Delete Job
            </button>
          </div>

        </form>

      </div>

    </div>
  )
}

export default EditJobDetails