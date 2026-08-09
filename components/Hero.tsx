import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#081229]/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            {/* Logos */}

            <div className="flex gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 w-fit shadow-xl border border-white/20 mb-10">

              <Image
                src="/logos/mit-logo.png"
                alt="MIT"
                width={70}
                height={70}
                className="rounded-lg bg-white"
              />

              <Image
                src="/logos/civil-logo.png"
                alt="Civil"
                width={70}
                height={70}
                className="rounded-lg bg-white"
              />

              <Image
                src="/logos/coe-logo.png"
                alt="COE"
                width={70}
                height={70}
                className="rounded-lg bg-white"
              />

            </div>

            <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
              Maharaja Institute of Technology Mysore
            </p>

            <p className="text-2xl text-white mt-4">
              Department of Civil Engineering
            </p>

            <h2 className="text-5xl lg:text-6xl font-extrabold text-white mt-10">
              Centre of Excellence
            </h2>

            <h1 className="text-6xl lg:text-7xl font-extrabold text-cyan-300 leading-tight mt-5">
              Earth Systems &
              <br />
              Geospatial Science
            </h1>

            <p className="mt-8 text-xl text-cyan-200 font-medium">
              Research • Consultancy • Capacity Building • Innovation
            </p>

            <p className="mt-8 text-lg text-gray-200 leading-8 max-w-2xl">
              Advancing Geospatial Technologies through Research,
              Consultancy, Capacity Building and Earth Observation
              for Sustainable Engineering and Societal Development.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="#about"
                className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl font-semibold text-white shadow-lg"
              >
                Explore Website
              </Link>

              <Link
                href="/internship"
                className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl font-semibold text-white"
              >
                3-Day Internship
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center lg:justify-end">

            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full">

              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                UPCOMING PROGRAMME
              </span>

              <h3 className="text-3xl font-bold text-slate-900 mt-6">
                3-Day Internship Training
              </h3>

              <p className="mt-5 text-slate-600 leading-8">
                Downloading, Processing and Terrain Analysis of
                Digital Elevation Models (DEM) using Open-Source
                GIS Software (QGIS).
              </p>

              <div className="mt-8 space-y-3">

                <p className="text-lg">
                  📅 <strong>August 2026</strong>
                </p>

                <p className="text-lg">
                  📍 MIT Mysore
                </p>

              </div>

              <Link
                href="/internship"
                className="mt-10 inline-block bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-4 rounded-xl font-semibold"
              >
                View Details →
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}