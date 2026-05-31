import { Link } from "react-router"

const Home = () => {
  return (
    <section className="min-h-full w-full bg-gray-100 text-center px-5 md:px-10 py-20">

      <p className="text-sm text-gray-500 mb-4">
        JOB PORTAL FOR STUDENTS AND RECRUITERS
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Find the right job without wasting time.
      </h2>

      <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
        ApplyNow helps candidates browse jobs, apply quickly, and track their applications.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/jobs"
          className="bg-black text-white px-7 py-4 rounded-xl"
        >
          Browse Jobs
        </Link>

        <Link
          to="/post-job"
          className="border border-gray-400 px-7 py-4 rounded-xl"
        >
          Post a Job
        </Link>
      </div>

    </section>
  )
}

export default Home