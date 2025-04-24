"use client";
import { motion } from "framer-motion";

export default function Menu() {
  const menuItems = [
    {
      name: "Coffees",
      description:
        "Expertly crafted coffee beverages using premium roasted beans",
      image: "/images/coffee-category.jpg",
      items: [
        {
          name: "Espresso",
          description: "Rich and intense single shot of pure coffee",
          price: "$3.50",
          image: "/images/espresso.jpg",
        },
        {
          name: "Café Crème",
          description: "Smooth and creamy coffee with steamed milk",
          price: "$4.50",
          image: "/images/cafe-creme.jpg",
        },
        {
          name: "Cappuccino",
          description: "Perfect balance of espresso, steamed milk, and foam",
          price: "$4.75",
          image: "/images/cappuccino.jpg",
        },
        {
          name: "Café au Lait",
          description: "Classic French coffee with hot milk",
          price: "$4.25",
          image: "/images/cafe-au-lait.jpg",
        },
        {
          name: "Americano",
          description: "Espresso diluted with hot water",
          price: "$3.75",
          image: "/images/americano.jpg",
        },
      ],
    },
    {
      name: "Fresh Juices",
      description: "Cold-pressed juices made fresh daily with organic fruits",
      image: "/images/juice-category.jpg",
      items: [
        {
          name: "Orange Fresh",
          description: "Pure squeezed oranges, rich in vitamin C",
          price: "$5.50",
          image: "/images/orange-juice.jpg",
        },
        {
          name: "Green Detox",
          description: "Blend of spinach, cucumber, apple, and ginger",
          price: "$6.50",
          image: "/images/green-detox.jpg",
        },
        {
          name: "Berry Blast",
          description: "Mixed berries packed with antioxidants",
          price: "$6.75",
          image: "/images/berry-blast.jpg",
        },
        {
          name: "Tropical Mix",
          description: "Mango, pineapple, and passion fruit blend",
          price: "$6.25",
          image: "/images/tropical-mix.jpg",
        },
        {
          name: "Carrot Ginger",
          description: "Fresh carrots with a kick of ginger",
          price: "$5.75",
          image: "/images/carrot-ginger.jpg",
        },
      ],
    },
    {
      name: "Pastries",
      description: "Freshly baked French pastries made in-house daily",
      image: "/images/pastry-category.jpg",
      items: [
        {
          name: "Croissant",
          description: "Buttery, flaky traditional French croissant",
          price: "$3.75",
          image: "/images/croissant.jpg",
        },
        {
          name: "Pain au Chocolat",
          description: "Chocolate-filled croissant pastry",
          price: "$4.25",
          image: "/images/pain-au-chocolat.jpg",
        },
        {
          name: "Quiche Lorraine",
          description: "Classic quiche with bacon and Gruyère cheese",
          price: "$6.50",
          image: "/images/quiche-lorraine.jpg",
        },
        {
          name: "Croque Monsieur",
          description: "Grilled ham and cheese sandwich with béchamel",
          price: "$7.50",
          image: "/images/croque-monsieur.jpg",
        },
        {
          name: "Macarons",
          description: "Delicate almond meringue cookies with filling",
          price: "$2.50",
          image: "/images/macarons.jpg",
        },
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-800">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our selection of artisanal coffees, freshly squeezed
            juices, and authentic French pastries, crafted with the finest
            ingredients for an exceptional experience.
          </p>
        </motion.div>

        <div className="space-y-16">
          {menuItems.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-gray-800">
                          {item.name}
                        </h4>
                        <span className="text-lg font-semibold text-emerald-600">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
