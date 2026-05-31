import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { api } from "../api"

const AppliedJobs = () => {

    const navigate = useNavigate()

    const [appliedJobs, setAppliedJobs] = useState([])

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            const res = await api.get("/jobs/appliedJobs")
            setAppliedJobs(res.data.applications || [])
        }
        fetchAppliedJobs()
    }, [])

    return (
        <div className="min-h-full w-full bg-gray-100 p-8">

            {appliedJobs.length === 0 ? (
                <div>
                    <h1> You have not applied to any job </h1>
                </div>
            ) : (

                <div>
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        Applied Jobs
                    </h1>

                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {appliedJobs.map((appliedJob) => (

                            <div
                                key={appliedJob._id}
                                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
                            >
                                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                                    {appliedJob.job?.title || "job no longer available"}
                                </h1>
                                <p className="text-gray-600 mb-4">
                                    {appliedJob.job?.description || "job may have been deleted"}
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">
                                        Applied Successfully
                                    </span>
                                    {appliedJob.job ? (
                                        <button onClick={() => navigate(`/jobs/${appliedJob.job._id}`)} className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
                                            View Details
                                        </button>
                                    ) : (
                                        <span className="text-red-500 text-sm">
                                            This job was deleted
                                        </span>
                                    )}
                                </div>

                            </div>

                        ))}
                    </div>
                </div>

            )

            }

        </div>
    )
}

export default AppliedJobs