import Link from "next/link";

export default function InternshipPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            3-Day Internship Training Programme
          </h1>

          <p className="mt-6 text-xl text-blue-100">
            Downloading, Processing and Terrain Analysis of Digital Elevation
            Models (DEM) using Open-Source GIS Software (QGIS)
          </p>

        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-blue-900">
          About the Programme
        </h2>

        <p className="mt-6 text-gray-700 leading-8 text-lg">
          This three-day internship introduces students to Digital Elevation
          Model (DEM) processing using QGIS. Participants will learn how to
          download DEM data from USGS Earth Explorer, reproject, merge and clip
          raster datasets, and generate terrain products such as Slope,
          Hillshade and Elevation Maps using open-source software.
        </p>

      </section>

      {/* Schedule */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Programme Schedule
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold text-blue-700">Day 1</h3>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Introduction to DEM</li>
              <li>• USGS Earth Explorer</li>
              <li>• Download DEM</li>
              <li>• Download District Boundary</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold text-blue-700">Day 2</h3>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Reprojection</li>
              <li>• Merge DEM Tiles</li>
              <li>• Clip DEM</li>
              <li>• Export Final DEM</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold text-blue-700">Day 3</h3>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Hillshade Map</li>
              <li>• Slope Map</li>
              <li>• Terrain Analysis</li>
              <li>• Discussion & Certificate</li>
            </ul>
          </div>

        </div>

      </section>

      {/* Downloads */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Downloads
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <a
            href="/downloads/Internship_Manual.pdf"
            target="_blank"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-blue-700">
              📘 Internship Manual
            </h3>

            <p className="mt-3 text-gray-600">
              Download the complete practical manual.
            </p>
          </a>

          <a
            href="/downloads/Schedule.pdf"
            target="_blank"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-blue-700">
              📅 Programme Schedule
            </h3>

            <p className="mt-3 text-gray-600">
              Download the detailed training schedule.
            </p>
          </a>

        </div>

      </section>

    </main>
  );
}