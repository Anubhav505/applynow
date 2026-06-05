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
        <div className="min-h-screen w-full bg-gray-100 p-6 md:p-10">

            <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Applicant Profile
            </h1>

            <div className="bg-white rounded-3xl shadow-sm p-8">

                <div className="flex flex-col gap-6">

                    {applicantDetails?.fullName && (
                        <div>
                            <p className="text-sm font-medium text-gray-500">Name</p>
                            <h2 className="text-2xl font-semibold text-gray-900">
                                {applicantDetails.fullName}
                            </h2>
                        </div>
                    )}

                    {applicantDetails?.phone && (
                        <div>
                            <p className="text-sm font-medium text-gray-500">Phone</p>
                            <p className="text-lg text-gray-900">
                                {applicantDetails.phone}
                            </p>
                        </div>
                    )}

                    {applicantDetails?.location && (
                        <div>
                            <p className="text-sm font-medium text-gray-500">Location</p>
                            <p className="text-lg text-gray-900">
                                {applicantDetails.location}
                            </p>
                        </div>
                    )}

                    {applicantDetails?.email && (
                        <div>
                            <p className="text-sm font-medium text-gray-500">Email</p>
                            <p className="text-lg text-gray-900">
                                {applicantDetails.email}
                            </p>
                        </div>
                    )}

                    {applicantDetails?.bio && (
                        <div>
                            <p className="text-sm font-medium text-gray-500">Bio</p>
                            <p className="text-lg text-gray-900">
                                {applicantDetails.bio}
                            </p>
                        </div>
                    )}

                    {applicantDetails?.education && (
                        <div>
                            <p className="text-sm font-medium text-gray-500">Education</p>
                            <p className="text-lg text-gray-900">
                                {applicantDetails.education}
                            </p>
                        </div>)}

                    {applicantDetails?.experience && (
                        <div>
                            <p className="text-sm font-medium text-gray-500">Experience</p>
                            <p className="text-lg text-gray-900">
                                {applicantDetails.experience}
                            </p>
                        </div>
                    )}

                    {applicantDetails?.skills && (
                        <div>
                            <p className="text-sm font-medium text-gray-500">Skills</p>
                            <p className="text-lg text-gray-900">
                                {applicantDetails.skills.join(", ")}
                            </p>
                        </div>
                    )}

                    {applicantDetails?.resume && (
                        <div>
                            <p className="text-sm font-medium text-gray-500">Resume Link</p>
                            <a href={applicantDetails?.resume} target="_blank" className="text-md text-blue-600 break-all">
                                {applicantDetails?.resume}
                            </a>
                        </div>
                    )}

                </div>

            </div>

        </div>
    )
}

export default ApplicantProfile