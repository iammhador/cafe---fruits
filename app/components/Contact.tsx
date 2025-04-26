"use client";
import { motion } from "framer-motion";
import {
  RiMapPinLine,
  RiTimeLine,
  RiPhoneLine,
  RiMailLine,
  RiInstagramLine,
  RiFacebookLine,
} from "react-icons/ri";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-500">
            Visit Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We warmly invite you to a place where coffee stirs the soul, fresh
            juices awaken the senses, and every moment feels touched by the
            spirit of a city built on love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-800">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-yellow-100 p-3 rounded-lg group-hover:bg-yellow-200 transition-colors duration-300">
                  <RiMapPinLine size={24} className="text-yellow-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">
                    123 Rue Saint-Honoré, 75001 Paris, France
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                  <RiTimeLine size={24} className="text-green-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-gray-600">
                    Sunday - Saturday: 8:30 AM - 8:30 PM
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                  <RiPhoneLine size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">+330758595116</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                  <RiMailLine size={24} className="text-purple-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@cafeparisien.com</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors duration-300"
                >
                  <RiInstagramLine size={20} className="text-gray-600" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors duration-300"
                >
                  <RiFacebookLine size={20} className="text-gray-600" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl h-[600px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d224.3433214162601!2d2.3520455471102624!3d48.857057359661226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sbd!4v1745655837557!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-0 hover:grayscale-50 transition-all duration-300"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
