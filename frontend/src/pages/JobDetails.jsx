import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { api } from "../api"

const JobDetails = () => {

    const { id } = useParams()

    const [jobDetails, setJobDetails] = useState({})

    useEffect(() => {
        const fetchJobDetails = async () => {
            const res = await api.get(`/jobs/getSingleJob/${id}`)
            setJobDetails(res.data)
        }
        fetchJobDetails()
    }, [id])

    const applyJob = async () => {
        const res = await api.post(`/jobs/applyJob/${id}`)
        console.log(res.data.message)
    }

    return (

        <div className="min-h-full w-full bg-gray-100 p-6 md:p-10">

            <h1 className="text-3xl md:text-4xl font-bold mb-10">
                Job Details
            </h1>

            <div className="max-w-4xl space-y-8">

                <div>
                    <p className="text-gray-500 mb-1">Title:</p>
                    <h2 className="text-3xl font-bold text-gray-900">
                        {jobDetails.title}
                    </h2>
                </div>

                <div>
                    <p className="text-gray-500 mb-1">Description:</p>
                    <p className="text-gray-700 text-lg leading-8">
                        {jobDetails.description}
                    </p>
                </div>

                <button
                    onClick={applyJob}
                    className="bg-black text-white px-7 py-3 rounded-xl font-medium cursor-pointer"
                >
                    Apply Now
                </button>

            </div>

        </div>
    )
}

export default JobDetails