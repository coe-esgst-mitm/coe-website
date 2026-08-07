export default function FocusAreas() {
  const areas = [
    "Geographic Information Systems (GIS)",
    "Remote Sensing & Earth Observation",
    "Drone Surveying & Mapping",
    "Digital Elevation Model (DEM) Analysis",
    "Hydrology & Watershed Management",
    "Environmental Monitoring",
    "Artificial Intelligence for Geospatial Applications",
    "Smart Cities & Urban Planning",
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
            OUR EXPERTISE
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Focus Areas
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            The Centre focuses on research, consultancy, capacity building and
            geospatial innovation for engineering and societal applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-blue-700 text-lg">
                {area}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}