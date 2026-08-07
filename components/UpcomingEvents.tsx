import Link from "next/link";

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Upcoming Events
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Training Programmes, Workshops and Faculty Development Programmes
        </p>

        <Link href="/internship">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer border-l-8 border-blue-700">

            <h3 className="text-3xl font-bold text-blue-700">
              🎓 3-Day Internship Training Programme
            </h3>

            <p className="mt-4 text-gray-700 leading-8">
              Learn DEM Downloading, Reprojection, Merging, Clipping,
              Slope Mapping, Hillshade Generation and Terrain Analysis
              using Open-Source GIS Software (QGIS).
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                3 Days
              </span>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                Offline
              </span>

              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
                5th Semester Students
              </span>

            </div>

            <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800">
              View Programme →
            </button>

          </div>

        </Link>

      </div>
    </section>
  );
}