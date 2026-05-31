import { useNavigate } from "react-router";
import { useEffect, useState } from "react"

import { api } from "../api"

const AllJobs = () => {

    let navigate = useNavigate()
    
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchJobs = async () => {
            const res = await api.get(`/jobs/getAllJobs`)
            setJobs(res.data)
        }
        fetchJobs()
    }, [])

    const applyJob = async (jobId) => {
        const res = await api.post(`/jobs/applyJob/${jobId}`)
        console.log(res.data.message)
    }

    const viewAllDetails = async (jobId) => {
        navigate(`/jobs/${jobId}`)
    }

    return (
        <div className="min-h-full w-full bg-gray-100 p-6 md:p-8">

            <h1 className="text-3xl md:text-4xl font-bold mb-8">
                All Jobs
            </h1>

            <div className="grid gap-6">

                {jobs.map((job) => (
                    <div
                        key={job._id}
                        className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition"
                    >

                        <div className="mb-4">
                            <h2 className="text-lg font-semibold text-gray-700 mb-1">
                                Title:
                            </h2>

                            <p className="text-2xl font-bold">
                                {job.title}
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-700 mb-1">
                                Description:
                            </h2>

                            <p className="text-gray-600">
                                {job.description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">

                            <button
                                onClick={() => applyJob(job._id)}
                                className="bg-black text-white px-5 py-2 rounded-lg cursor-pointer"
                            >
                                Apply
                            </button>

                            <button
                                onClick={() => viewAllDetails(job._id)}
                                className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-xl font-medium transition cursor-pointer"
                            >
                                View Details
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default AllJobs