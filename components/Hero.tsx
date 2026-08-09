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
      <div className="absolute inset-0 bg-[#07182e]/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 w-fit shadow-xl">

              <Image
                src="/logos/mit-logo.png"
                alt="MIT"
                width={65}
                height={65}
                className="rounded-lg bg-white"
              />

              <Image
                src="/logos/civil-logo.png"
                alt="Civil"
                width={65}
                height={65}
                className="rounded-lg bg-white"
              />

              {/* Bigger COE Logo */}

              <Image
                src="/logos/coe-logo.png"
                alt="COE"
                width={95}
                height={95}
                className="rounded-full bg-white shadow-lg"
              />

            </div>

            <p className="mt-8 uppercase tracking-[5px] text-cyan-400 font-semibold text-lg">
              Maharaja Institute of Technology Mysore
            </p>

            <p className="text-2xl text-white mt-3">
              Department of Civil Engineering
            </p>

            <h2 className="text-5xl font-bold text-white mt-8">
              Centre of Excellence
            </h2>

            <h1 className="text-6xl font-extrabold leading-tight text-cyan-300 mt-4">
              Earth Systems &
              <br />
              Geospatial Science
              <br />
              <span className="text-white">& Technology</span>
            </h1>

            <p className="mt-5 text-cyan-200 text-lg font-medium">
              Research • Consultancy • Capacity Building • Innovation
            </p>

            <p className="mt-5 text-gray-200 text-lg leading-8 max-w-xl">
              Advancing Geospatial Technologies through Research,
              Consultancy, Capacity Building and Earth Observation
              for Sustainable Engineering and Societal Development.
            </p>

            <div className="flex gap-4 mt-8">

              <Link
                href="#about"
                className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-xl text-white font-semibold"
              >
                Explore Website
              </Link>

              <Link
                href="/internship"
                className="border border-white px-7 py-3 rounded-xl text-white hover:bg-white hover:text-black transition"
              >
                Internship
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">

            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full">

              <span className="inline-block bg-slate-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                UPCOMING EVENT
              </span>

              <h3 className="text-3xl font-bold text-slate-900 mt-5">
                3-Day Internship Training
              </h3>

              <p className="mt-5 text-slate-600 leading-8">
                Downloading, Processing and Terrain Analysis of
                Digital Elevation Models (DEM) using
                Open-Source GIS Software (QGIS).
              </p>

              <div className="mt-6 space-y-2 text-slate-700">

                <p>
                  📅 <strong>August 2026</strong>
                </p>

                <p>
                  📍 MIT Mysore
                </p>

              </div>

              <Link
                href="/internship"
                className="block mt-8 bg-blue-700 hover:bg-blue-800 text-white text-center py-3 rounded-xl font-semibold"
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