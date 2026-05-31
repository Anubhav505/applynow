import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import { api } from "../api"

const Applicants = () => {

  const navigate = useNavigate()

  const { id } = useParams()

  const [applicants, setApplicants] = useState([])

  useEffect(() => {
    const fetchApplicants = async () => {
      const res = await api.get(`/jobs/applicants/${id}`)
      setApplicants(res.data.viewApplicants)
    }
    fetchApplicants()
  }, [id])

  return (
    <div className="min-h-full w-full bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">
        Applicants
      </h1>

      <div className="grid gap-6">
        {
          applicants.map((applicant) => (
            <div
              key={applicant._id}
              className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">

                <div>
                  <h1 className="text-xl font-semibold text-gray-800">
                    {applicant.user.username}
                  </h1>

                  <p className="text-gray-500 mt-1">
                    Applied for this job
                  </p>
                </div>

                <button
                  onClick={() => { navigate(`/applicant/${applicant.user._id}`) }}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer">
                  View Profile
                </button>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Applicants