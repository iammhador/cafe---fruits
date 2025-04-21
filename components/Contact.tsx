"use client";
import { motion } from "framer-motion";
import { RiMapPinLine, RiTimeLine, RiPhoneLine } from "react-icons/ri";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to welcome you to our café. Here&apos;s how to find
            us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="flex items-start mb-4">
              <RiMapPinLine size={24} className="text-yellow-500 mt-1 mr-4" />
              <div>
                <h4 className="font-bold">Address</h4>
                <p className="text-gray-600">
                  123 Rue Saint-Honoré, 75001 Paris, France
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <RiTimeLine size={24} className="text-yellow-500 mt-1 mr-4" />
              <div>
                <h4 className="font-bold">Opening Hours</h4>
                <p className="text-gray-600">
                  Sunday - Saturday: 8:30 AM - 8:30 PM
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <RiPhoneLine size={24} className="text-yellow-500 mt-1 mr-4" />
              <div>
                <h4 className="font-bold">Contact</h4>
                <p className="text-gray-600">+330758595116</p>
                <p className="text-gray-600">info@cafeparisien.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg overflow-hidden h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2214556475547!2d2.3279806!3d48.8657149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3c844d5635%3A0x5333945415f57ee1!2s123%20Rue%20Saint-Honor%C3%A9%2C%2075001%20Paris%2C%20France!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
