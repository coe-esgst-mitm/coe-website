export default function CentreCoordinators() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-slate-900 mb-16">
          CENTRE COORDINATORS
        </h2>

        <div className="grid md:grid-cols-2 gap-20">

          {/* Left Coordinator */}

          <div className="text-left">

            <h3 className="text-4xl font-bold text-slate-900">
              Prof. MANJUNATHA R. N.
            </h3>

            <h4 className="text-2xl font-semibold mt-3 text-slate-700">
              Assistant Professor
            </h4>

            <p className="mt-5 text-lg text-slate-700 leading-8">
              <strong>B.E.</strong> (Civil Engg.),
              <strong> M.Tech.</strong> (Hydraulics),
              <strong> Ph.D.</strong> in Water Resources,
              <strong> NITK</strong>
            </p>

            <p className="text-lg text-slate-700 leading-8">
              MISH, MIWWA,
              AICTE-QIP-PG Certified,
              NIT Bhopal
            </p>

          </div>

          {/* Right Coordinator */}

          <div className="text-right">

            <h3 className="text-4xl font-bold text-slate-900">
              Prof. MANOJ B. R.
            </h3>

            <h4 className="text-2xl font-semibold mt-3 text-slate-700">
              Assistant Professor
            </h4>

            <p className="mt-5 text-lg text-slate-700 leading-8">
              <strong>B.E.</strong> (Civil Engg.),
              <strong> M.Tech.</strong> (Env. Engg.),
              <strong> Ph.D.</strong> in Geoinformatics,
              <strong> NITK</strong>
            </p>

            <p className="text-lg text-slate-700 leading-8">
              MISH, MIWWA,
              AICTE-QIP-PG Certified,
              NIT Bhopal
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}