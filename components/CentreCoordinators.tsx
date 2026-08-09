export default function CentreCoordinators() {
  return (
    <section className="py-16 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-extrabold text-slate-900 tracking-wide">
            CENTRE COORDINATORS
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Manoj */}

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-2xl transition duration-300">

            <h3 className="text-3xl font-bold text-blue-900">
              Prof. Manoj B. R.
            </h3>

            <p className="text-xl font-semibold text-slate-700 mt-1">
              Assistant Professor
            </p>

            <p className="mt-4 text-slate-700">
              Department of Civil Engineering
            </p>

            <p className="text-slate-700">
              Maharaja Institute of Technology Mysore
            </p>

            <hr className="my-5" />

            <p className="leading-8 text-slate-700">
              <strong>B.E.</strong> (Civil Engineering),
              <strong> M.Tech.</strong> (Environmental Engineering),
              <strong> (Ph.D.</strong> in Geoinformatics, NITK)
            </p>

            <p className="mt-3 text-slate-600">
              MISH, MIWWA, AICTE-QIP-PG Certified, NIT Bhopal
            </p>

          </div>

          {/* Manjunatha */}

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-2xl transition duration-300">

            <h3 className="text-3xl font-bold text-blue-900">
              Prof. Manjunatha R. N.
            </h3>

            <p className="text-xl font-semibold text-slate-700 mt-1">
              Assistant Professor
            </p>

            <p className="mt-4 text-slate-700">
              Department of Civil Engineering
            </p>

            <p className="text-slate-700">
              Maharaja Institute of Technology Mysore
            </p>

            <hr className="my-5" />

            <p className="leading-8 text-slate-700">
              <strong>B.E.</strong> (Civil Engineering),
              <strong> M.Tech.</strong> (Hydraulics),
              <strong> (Ph.D.</strong> in Water Resources, NITK)
            </p>

            <p className="mt-3 text-slate-600">
              MISH, MIWWA, AICTE-QIP-PG Certified, NIT Bhopal
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}