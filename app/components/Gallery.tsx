/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import One from "@/assets/gallery/one.jpg";
import Two from "@/assets/gallery/two.jpg";
import Three from "@/assets/gallery/three.jpg";
import Four from "@/assets/gallery/four.jpg";
import Five from "@/assets/gallery/five.jpg";
import Six from "@/assets/gallery/six.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: One,
      // alt: "Café Interior",
      // category: "ambiance",
      // description: "Our cozy interior designed for your comfort",
    },
    {
      id: 2,
      src: Two,
      // alt: "Coffee Preparation",
      // category: "process",
      // description: "Artisanal coffee brewing at its finest",
    },
    {
      id: 3,
      src: Four,
      // alt: "Fresh Juice",
      // category: "drinks",
      // description: "Fresh-pressed juices made daily",
    },
    {
      id: 4,
      src: Five,
      // alt: "French Pastries",
      // category: "food",
      // description: "Authentic French pastries baked in-house",
    },
    {
      id: 5,
      src: Six,
      // alt: "Outdoor Seating",
      // category: "ambiance",
      // description: "Beautiful terrace for outdoor dining",
    },
    {
      id: 6,
      src: Three,
      // alt: "Espresso Shot",
      // category: "drinks",
      // description: "Perfect espresso shots every time",
    },
  ];

  return (
    <section
      id="gallery"
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
            Our Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Step into our world of artisanal coffee, fresh juices, and
            delightful moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ height: index % 3 === 0 ? "400px" : "300px" }}
              onClick={() => setSelectedImage(img as any)}
            >
              <Image
                src={img.src}
                alt="Images"
                // alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Overlay with text */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-yellow-400 text-sm uppercase tracking-wider mb-2">
                  {img.category}
                </span>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {img.alt}
                </h3>
                <p className="text-gray-200 text-sm">{img.description}</p>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl w-full aspect-[3/2] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={(selectedImage as { src: string })?.src || ""}
              alt={(selectedImage as { alt: string })?.alt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 1536px) 100vw, 1536px"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
