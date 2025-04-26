"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Menu() {
  const menuItems = [
    {
      name: "Coffees",
      description:
        "Expertly crafted coffee beverages using premium roasted beans",
      items: [
        {
          name: "Espresso",
          description: "Rich and intense single shot of pure coffee",
          price: "€1.80",
          image: "/images/espresso.jpg",
        },
        {
          name: "Americano",
          description: "Espresso diluted with hot water",
          price: "€2.50",
          image: "/images/americano.jpg",
        },
        {
          name: "Cafe Latte",
          description: "Espresso with steamed milk and a light layer of foam",
          price: "€2.80",
          image: "/images/cafe-au-lait.jpg",
        },
        {
          name: "Cappuccino",
          description: "Perfect balance of espresso, steamed milk, and foam",
          price: "€3.00",
          image: "/images/cappuccino.jpg",
        },
      ],
    },
    {
      name: "Fresh Juices",
      description: "Cold-pressed juices made fresh daily with organic fruits",
      image: "/images/juice-category.jpg",
      items: [
        {
          name: "Orange Fresh Juice",
          description: "Pure squeezed oranges, rich in vitamin C",
          price: "€2.50 - €4.50",
          image: "/images/orange-juice.jpg",
        },
        {
          name: "Pomegranate Juice",
          description: "Fresh pressed pomegranate juice, naturally sweet",
          price: "€3.00 - €5.50",
          image: "/images/green-detox.jpg",
        },
        {
          name: "Lemon Juice",
          description: "Fresh squeezed lemon juice, perfect refreshment",
          price: "€2.50 - €5.00",
          image: "/images/berry-blast.jpg",
        },
        {
          name: "Mango Box",
          description: "Fresh mango juice box, 500g serving",
          price: "€4.00",
          image: "/images/berry-blast.jpg",
        },
        {
          name: "Watermelon Box",
          description: "Fresh watermelon juice box, 500g serving",
          price: "€3.00",
          image: "/images/berry-blast.jpg",
        },
      ],
    },
    {
      name: "Fresh Fruits",
      description: "Premium quality fresh fruits, carefully selected daily",

      items: [
        {
          name: "Seasonal Fresh Fruits",
          description: "Daily selection of fresh seasonal fruits",
          image: "/images/fresh-fruits.jpg",
        },
      ],
    },
    {
      name: "Premium Nuts",
      description: "High-quality nuts selection",
      image: "/images/nuts-category.jpg",
      items: [
        {
          name: "Assorted Nuts",
          description: "Various premium quality nuts available",
          image: "/images/nuts-selection.jpg",
        },
      ],
    },
    {
      name: "Chocolates & Snacks",
      description: "Premium chocolates and snacks",

      items: [
        {
          name: "Chocolate Selection",
          description: "Premium chocolate varieties",
          image: "/images/chocolate-selection.jpg",
        },
        {
          name: "Chips & Snacks",
          description: "Various chips and snack options",
          image: "/images/chips-selection.jpg",
        },
      ],
    },
    {
      name: "Cold Drinks",
      description: "Refreshing selection of beverages",

      items: [
        {
          name: "Refreshing Beverages",
          description: "Selection of cold drinks and refreshments",
          image: "/images/beverages.jpg",
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-500">
            Our Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our selection of artisanal coffees, freshly squeezed
            juices, and premium products, crafted with the finest ingredients
            for an exceptional experience.
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
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <Image
                        width={500}
                        height={500}
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-gray-800 hover:text-amber-600 transition-colors duration-300">
                          {item.name}
                        </h4>
                        {"price" in item && (
                          <span className="text-lg font-semibold text-emerald-600">
                            {item.price}
                          </span>
                        )}
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
