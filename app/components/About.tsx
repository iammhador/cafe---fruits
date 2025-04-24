"use client";
import { motion } from "framer-motion";
import { RiLeafLine, RiCupLine, RiHeartLine } from "react-icons/ri";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: <RiLeafLine size={24} className="text-green-600" />,
      title: "Eco-Friendly",
      description:
        "We prioritize sustainable and eco-friendly practices in everything we do",
      bgColor: "bg-green-100",
    },
    {
      icon: <RiCupLine size={24} className="text-amber-600" />,
      title: "Quality First",
      description: "Premium ingredients sourced from trusted local suppliers",
      bgColor: "bg-amber-100",
    },
    {
      icon: <RiHeartLine size={24} className="text-rose-600" />,
      title: "Made with Love",
      description: "Every drink crafted with passion and attention to detail",
      bgColor: "bg-rose-100",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-500">
            Our Story
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A journey of passion, tradition, and innovation in the heart of
            Paris
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/cafe-interior.jpg"
                alt="Café Interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl"
            >
              <p className="text-2xl font-bold text-yellow-500">15+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              A Perfect Blend of Tradition & Innovation
            </h3>
            <p className="text-gray-600 text-lg">
              Nestled in the heart of Paris, our café combines the rich
              tradition of French coffee culture with modern juice innovations.
              We believe in using only the finest ingredients, ethically sourced
              and prepared with care.
            </p>
            <p className="text-gray-600 text-lg">
              Our cozy space is designed to be your home away from home -
              whether you&lsquo;re catching up with friends, working remotely,
              or simply enjoying a moment of solitude with your favorite
              beverage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className={`${feature.bgColor} p-3 rounded-lg`}>
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
