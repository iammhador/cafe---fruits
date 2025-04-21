"use client";
import { motion } from "framer-motion";

export default function Menu() {
  const menuItems = [
    {
      name: "Coffees",
      items: [
        "Espresso",
        "Café Crème",
        "Cappuccino",
        "Café au Lait",
        "Americano",
      ],
    },
    {
      name: "Fresh Juices",
      items: [
        "Orange Fresh",
        "Green Detox",
        "Berry Blast",
        "Tropical Mix",
        "Carrot Ginger",
      ],
    },
    {
      name: "Pastries",
      items: [
        "Croissant",
        "Pain au Chocolat",
        "Quiche Lorraine",
        "Croque Monsieur",
        "Macarons",
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of artisanal coffees and freshly squeezed
            juices, made with the finest ingredients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
              <ul>
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="py-2 border-b border-gray-100 last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
