"use client";
import { motion } from "framer-motion";

export default function Gallery() {
  // In a real implementation, these would be your actual images
  const galleryImages = [
    { id: 1, src: "/cafe-1.jpg", alt: "Café Interior" },
    { id: 2, src: "/coffee-2.jpg", alt: "Coffee Preparation" },
    { id: 3, src: "/juice-1.jpg", alt: "Fresh Juice" },
    { id: 4, src: "/pastry-1.jpg", alt: "French Pastries" },
    { id: 5, src: "/cafe-2.jpg", alt: "Outdoor Seating" },
    { id: 6, src: "/coffee-1.jpg", alt: "Espresso Shot" },
    { id: 7, src: "/juice-2.jpg", alt: "Juice Selection" },
    { id: 8, src: "/cafe-3.jpg", alt: "Barista at Work" },
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a glimpse into our cozy café atmosphere and delicious
            creations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg relative h-64"
            >
              {/* Note: In real implementation, replace the placeholder with actual image path */}
              {/* <Image 
                src={img.src} 
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              /> */}

              {/* Placeholder for demo purposes */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Photo: {img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
