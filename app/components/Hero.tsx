"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiCupLine, RiLeafLine } from "react-icons/ri";
export default function Hero() {
  return (
    <section
      id="home"
      className="hero h-screen flex items-center justify-center text-center text-white"
    >
      <div className="flex justify-center mb-6">
        <div className="bg-yellow-400 p-3 rounded-full">
          <RiCupLine size={32} className="text-white" />
        </div>
        <div className="bg-green-500 p-3 rounded-full ml-4">
          <RiLeafLine size={32} className="text-white" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Cafe & Fruits</h1>
        <p className="text-xl md:text-2xl mb-8">
          Exceptional Coffee & Fresh Juices in the Heart of Paris
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#menu"
            className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-medium inline-block"
          >
            View Our Menu
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
