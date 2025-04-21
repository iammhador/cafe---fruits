"use client";
import { motion } from "framer-motion";
import { RiLeafLine } from "react-icons/ri";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            {/* Placeholder for actual café image */}
            <div className="rounded-lg shadow-lg bg-gray-200 h-80 flex items-center justify-center">
              <p className="text-gray-500">Café Interior Image</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 md:pl-12"
          >
            <h2 className="text-4xl font-bold mb-4">About Our Café</h2>
            <p className="text-gray-600 mb-4">
              Nestled in the heart of Paris, our café combines the rich
              tradition of French coffee culture with modern juice innovations.
              We believe in using only the finest ingredients, ethically sourced
              and prepared with care.
            </p>
            <p className="text-gray-600 mb-6">
              Our cozy space is designed to be your home away from home -
              whether you're catching up with friends, working remotely, or
              simply enjoying a moment of solitude with your favorite beverage.
            </p>
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-full">
                <RiLeafLine size={24} className="text-green-600" />
              </div>
              <p className="ml-4 text-gray-700">
                We prioritize sustainable and eco-friendly practices
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
