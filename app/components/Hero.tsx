"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiCupLine, RiLeafLine } from "react-icons/ri";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        {/* Floating Icons */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-6 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="bg-yellow-400/90 p-4 rounded-2xl shadow-lg backdrop-blur-md"
          >
            <RiCupLine size={40} className="text-white" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -10 }}
            className="bg-green-500/90 p-4 rounded-2xl shadow-lg backdrop-blur-md"
          >
            <RiLeafLine size={40} className="text-white" />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container mx-auto px-4 text-center"
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-500"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Cafe & Fruits
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the perfect blend of artisanal coffee and fresh, organic
            juices in the heart of Paris
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#menu"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-4 rounded-full font-medium inline-block shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Explore Menu
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium inline-block border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
