"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >

          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
            ABOUT THE CENTRE
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Centre of Excellence
          </h2>

          <h3 className="mt-2 text-3xl font-semibold text-blue-700">
            Earth Systems and Geospatial Science & Technology
          </h3>

          <p className="mt-8 text-lg text-slate-600 leading-9 text-justify">

            The Centre of Excellence in Earth Systems & Geospatial Science
            at the Department of Civil Engineering, Maharaja Institute of Technology Mysore, 
            serves as a multidisciplinary platform
            for education, research, consultancy and innovation in
            Geographic Information Systems (GIS), Remote Sensing, Earth
            Observation, Drone Mapping and Artificial Intelligence.

          </p>

          <p className="mt-6 text-lg text-slate-600 leading-9 text-justify">

            The Centre is committed to developing sustainable solutions for
            water resources, environmental monitoring, urban planning,
            disaster management and climate resilience through advanced
            geospatial technologies. It also promotes industry
            collaboration, faculty development programmes, student
            internships and capacity-building initiatives.

          </p>

        </motion.div>

      </div>

    </section>
  );
}