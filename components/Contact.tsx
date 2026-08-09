export default function Contact() {
  return (
    <section className="py-24 bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-cyan-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
            CONTACT US
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Get in Touch
          </h2>

        </div>

        <div className="bg-slate-800 rounded-2xl shadow-xl p-10 border border-slate-700">

          <h3 className="text-3xl font-bold text-cyan-400">
            Centre of Excellence
          </h3>

          <p className="mt-4 text-slate-300">
            Earth Systems and Geospatial Science & Technology (CoE-ESGST)
          </p>

          <p className="text-slate-300">
            Department of Civil Engineering
          </p>

          <p className="text-slate-300">
            Maharaja Institute of Technology Mysore
          </p>

          <hr className="my-10 border-slate-600" />

          <div className="grid md:grid-cols-2 gap-10">

            <div>

              <h4 className="text-2xl font-bold text-cyan-400">
                Prof. Manoj B.R.
              </h4>

              <p className="mt-5 text-slate-300">
                📞 +91 8197393525
              </p>

              <p className="text-slate-300">
                ✉️ manojbr_cv@mitmysore.in
              </p>

            </div>

            <div>

              <h4 className="text-2xl font-bold text-cyan-400">
                Prof. Manjunatha R. N.
              </h4>

              <p className="mt-5 text-slate-300">
                📞 +91 9480832442
              </p>

              <p className="text-slate-300">
                ✉️ manjunath_ce@mitmysore.in
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}