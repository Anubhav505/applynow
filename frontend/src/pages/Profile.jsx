import { useEffect, useState } from "react";
import { api } from "../api";

const Profile = () => {
    const [profileDetails, setProfileDetails] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const getProfileDetails = async () => {
            try {
                const res = await api.get("/users/profile");
                setProfileDetails(res.data.user);
            } catch (error) {
                console.error(error.message);
            }
        };

        getProfileDetails();
    }, []);

    const handleChange = (e) => {
        setProfileDetails({
            ...profileDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async () => {
        try {
            const res = await api.put("/users/profile", profileDetails);
            setProfileDetails(res.data.user);
            setIsEditing(false);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="min-h-screen w-full bg-gray-100 px-6 py-10">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">

                <div className="flex justify-between items-start mb-8">
                    <div>
                        {isEditing ? (
                            <input
                                name="fullName"
                                value={profileDetails.fullName || ""}
                                onChange={handleChange}
                                className="text-3xl font-bold border-b outline-none"
                                placeholder="Full name"
                            />
                        ) : (
                            <h1 className="text-3xl font-bold text-gray-900">
                                {profileDetails?.fullName || "No name"}
                            </h1>
                        )}

                        {isEditing ? (
                            <textarea
                                name="bio"
                                value={profileDetails.bio || ""}
                                onChange={handleChange}
                                className="w-full mt-3 border rounded-lg p-3 outline-none"
                                placeholder="Bio"
                            />
                        ) : (
                            <p className="text-gray-600 mt-2">
                                {profileDetails?.bio || "No bio added"}
                            </p>
                        )}
                    </div>

                    {isEditing ? (
                        <button
                            onClick={handleUpdate}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {["education", "email", "experience", "location", "phone", "resume"].map((field) => (
                        <div key={field}>
                            <p className="text-sm text-gray-500 capitalize">{field}</p>

                            {isEditing ? (
                                <input
                                    name={field}
                                    value={profileDetails[field] || ""}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg p-2 mt-1 outline-none"
                                    placeholder={field}
                                />
                            ) : field === "resume" && profileDetails.resume ? (
                                <a
                                    href={profileDetails.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-medium text-blue-600 hover:underline break-all"
                                >
                                    View Resume
                                </a>
                            ) : (
                                <h2 className="text-lg font-medium text-gray-900">
                                    {profileDetails[field] || "Not added"}
                                </h2>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <p className="text-sm text-gray-500 mb-3">Skills</p>

                    {isEditing ? (
                        <input
                            name="skills"
                            value={profileDetails.skills?.join(", ") || ""}
                            onChange={(e) =>
                                setProfileDetails({
                                    ...profileDetails,
                                    skills: e.target.value.split(",").map((skill) => skill.trim()),
                                })
                            }
                            className="w-full border rounded-lg p-2 outline-none"
                            placeholder="React, Node.js, MongoDB"
                        />
                    ) : profileDetails?.skills?.length > 0 ? (
                        <div className="flex flex-wrap gap-3">
                            {profileDetails.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <h2 className="text-lg font-medium text-gray-900">Not added</h2>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Profile;