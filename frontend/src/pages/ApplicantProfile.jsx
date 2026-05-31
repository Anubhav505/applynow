import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { api } from "../api"

const ApplicantProfile = () => {

    const { id } = useParams()
    
    const [applicantDetails, setApplicantDetails] = useState(null)
    
    useEffect(() => {
        const fetchApplicantDetails = async () => {
            const res = await api.get(`/jobs/applicant-profile/${id}`)
            setApplicantDetails(res.data.findApplicantDetails)

        }
        fetchApplicantDetails()
    }, [id])

    return (
        <div className="min-h-screen w-full bg-gray-100 p-10">

            <h1 className="text-4xl font-bold text-gray-800 mb-16">
                Applicant Profile
            </h1>

            <div className="flex items-center gap-4 text-2xl">

                <h1 className="font-bold text-gray-700">
                    Username:
                </h1>

                <p className="text-gray-900">
                    {applicantDetails?.username}
                </p>

            </div>

        </div>
    )
}

export default ApplicantProfile