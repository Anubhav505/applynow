import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { api } from "../api"

const MyPostedJobs = () => {

    const navigate = useNavigate()
    const [myPostedJobs, setMyPostedJobs] = useState([])

    useEffect(() => {
        const fetchMyPostedJobs = async () => {
            const res = await api.get("/jobs/myPostedJobs")
            setMyPostedJobs(res.data.myPostedJobs)
            console.log(res.data.message)
        }
        fetchMyPostedJobs()
    }, [])

    return (
        <div className="min-h-full w-full bg-gray-100 p-6 md:p-8">

            {
                myPostedJobs.length === 0 ? (
                    <>
                        <h1>You haven't posted any job yet</h1>
                    </>
                ) : (

                    <>
                        <h1 className="text-3xl md:text-4xl font-bold mb-8">
                            My Posted Jobs
                        </h1>

                        <div className="grid gap-6">

                            {myPostedJobs.map((myPostedJob) => (
                                <div
                                    key={myPostedJob._id}
                                    className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition"
                                >

                                    <div className="flex justify-between items-start mb-4">

                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-700 mb-1">
                                                Title:
                                            </h2>

                                            <p className="text-2xl font-bold">
                                                {myPostedJob.title}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => { navigate(`/edit-job/${myPostedJob._id}`) }}
                                            className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-xl font-medium transition cursor-pointer"
                                        >
                                            Edit
                                        </button>

                                    </div>

                                    <div className="mb-6">
                                        <h2 className="text-lg font-semibold text-gray-700 mb-1">
                                            Description:
                                        </h2>

                                        <p className="text-gray-600">
                                            {myPostedJob.description}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => navigate(`/jobs/${myPostedJob._id}/applicants`)}
                                        className="bg-black text-white px-5 py-2 rounded-lg cursor-pointer"
                                    >
                                        View Applicants
                                    </button>

                                </div>
                            ))}

                        </div>
                    </>
                )
            }
        </div>
    )
}

export default MyPostedJobs