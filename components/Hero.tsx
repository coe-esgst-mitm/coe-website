"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/80 to-slate-900/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-5 mb-10"
        >
          <Image src="/logos/mit-logo.png" alt="MIT" width={85} height={85} />
          <Image src="/logos/civil-logo.png" alt="Civil" width={85} height={85} />
          <Image src="/logos/coe-logo.png" alt="COE" width={85} height={85} />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl"
        >

          <p className="uppercase tracking-[6px] text-cyan-300 font-semibold">
            MAHARAJA INSTITUTE OF TECHNOLOGY MYSORE
          </p>

          <p className="mt-2 text-xl text-gray-200">
            Department of Civil Engineering
          </p>

          <h1 className="mt-6 text-6xl lg:text-7xl font-black text-white leading-tight">

            Centre of Excellence

            <span className="block text-cyan-300 mt-2">
              Earth Systems and Geospatial Science & Technology
            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-200 leading-9 max-w-3xl">

            Advancing Research, Consultancy, Capacity Building,
            Geospatial Innovation and Earth Observation Technologies
            for sustainable engineering and societal development.

          </p>

        </motion.div>

      </div>

    </section>
  );
}