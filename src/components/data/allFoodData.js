const allfoodData = [
  {
    id: 1,
    category: "Dinner",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673722321/pngwing.com_22_jp2sqx.png",
    name: "Basmati Jollof rice",
    price: 3000,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 2,
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721735/pngwing.com_16_zurgty.webp",
    name: "Burger and Cola",
    price: 1500,
    desc: 'Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes. You can also make a hamburger with turkey or other kinds of meat — although rarely, if ever, is ham used in a hamburger. Hamburgers were originally called "hamburg steak," named for the German city of Hamburg, although no actual connection between the place and the food has ever been documented.',
  },
  {
    id: 3,
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720496/pngwing.com-_8__sxocwn.webp",
    name: " Mexico Salad Chicken",
    price: 3000,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 4,
    category: "Dinner",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721735/pngwing.com_19_c7ahlp.webp",
    name: "RICE Skillet and Chicken",
    price: 2500,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 5,
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720837/pngwing.com_10_mexzxw.webp",
    name: "Macaronni and Chicken Sauce",
    price: 3500,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 6,
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721018/pngwing.com_11_u01hre.webp",
    name: "French Fries",
    price: 1000,
    desc: "french fries, also called chips, finger chips, fries, or French pommes frites, side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips. Fries are often salted and served with other items, including ketchup, mayonnaise, or vinegar. ",
  },
  {
    id: 7,
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1675289357/pngwing.com_vnmees.png",
    name: "Noodles and Egg",
    price: 1500,
    desc: "This dish is finished with a unique type of omelette. You use a spray bottle to spray the egg mixture into a hot pan, creating an egg net. When placed on top of the noodles, you can still see the noodle dish underneath.",
  },
  {
    id: 8,
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721887/pngwing.com_12_yac4gz.webp",
    name: "Basmati Chinese Rice and Salad",
    price: 3500,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 9,
    category: "Dinner",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673722321/pngwing.com_23_ujqxvg.png",
    name: "Potato Porridge",
    price: 3000,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 10,
    category: "Dinner",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673722305/pngwing.com_25_ybdmcr.png",
    name: "Sour Chicken",
    price: 4000,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 11,
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721735/pngwing.com_18_rgecze.webp",
    name: "Salad Fried Potatoes",
    price: 3500,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 12,
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721735/pngwing.com_20_bm99pg.webp",
    name: "Chicken Veggie Sauce",
    price: 4000,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 13,
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721735/pngwing.com_20_bm99pg.webp",
    name: "DrumStick",
    price: 1500,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 14,
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721888/pngwing.com_14_rhjogg.webp",
    name: "Americano Steak",
    price: 2500,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 15,
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721888/pngwing.com_13_gfuhxr.webp",
    name: "Americano Salad Steak",
    price: 2500,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 16,
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720736/pngwing.com_9_a4g9pe.webp",
    name: "Double Burger",
    price: 1500,
    desc: 'Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes. You can also make a hamburger with turkey or other kinds of meat — although rarely, if ever, is ham used in a hamburger. Hamburgers were originally called "hamburg steak," named for the German city of Hamburg, although no actual connection between the place and the food has ever been documented.',
  },
  {
    id: 17,
    category: "Dinner",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720496/pngwing.com-_8__sxocwn.webp",
    name: "Vegge Salad Chicken",
    price: 3000,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 18,
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720365/pngwing.com-_7__emy3te.webp",
    name: "Hot Dog Crunchies",
    price: 1500,
    desc: "A hot dog (uncommonly spelled hotdog) is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. The term hot dog can refer to the sausage itself. ",
  },
  {
    id: 19,
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720238/pngwing.com-_6__eix6nv.webp",
    name: "Veggie Chicken Mixed Macaronni",
    price: 3000,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 20,
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720157/pngwing.com-_5__ofmeey.webp",
    name: "Omelette Paratti",
    price: 2000,
    desc: 'A good omelet is a little bit fluffy, but firm enough to contain its filling. You cook an omelet by whisking eggs with a bit of water or milk and cooking them quickly over high heat without stirring. You can then fold the omelet in half to serve it. While the French word omelette was first used in the 1600s, the omelet itself may be more than two hundred years older than that. The Latin root, lamella, means "thin plate."',
  },
  {
    id: 21,
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720016/pngwing.com-_4__affge7.webp",
    name: "Omelette Salad",
    price: 2000,
    desc: 'A good omelet is a little bit fluffy, but firm enough to contain its filling. You cook an omelet by whisking eggs with a bit of water or milk and cooking them quickly over high heat without stirring. You can then fold the omelet in half to serve it. While the French word omelette was first used in the 1600s, the omelet itself may be more than two hundred years older than that. The Latin root, lamella, means "thin plate."',
  },
  {
    id: 22,
    category: "Dinner",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673719880/pngwing.com-_3__yja3r5.webp",
    name: "Spaggheti Buronto",
    price: 2500,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 23,
    category: "Dinner",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673719778/pngwing.com-_2__v944jl.webp",
    name: "Salad Creamy",
    price: 3000,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 24,
    category: "Dinner",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673632501/Pngtree_healthy_food_3776802_nqbeku.webp",
    name: "Veggie Egg Macaronni",
    price: 2500,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 25,
    category: "Dinner",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673701234/food-png-2957_so38ol.webp",
    name: "Italian Chicken Sauce",
    price: 2000,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
  {
    id: 26,
    category: "Breakfast",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673701487/fast-food-png-41613_rj94kr.webp",
    name: "American Hamburger",
    price: 1500,
    desc: 'Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes. You can also make a hamburger with turkey or other kinds of meat — although rarely, if ever, is ham used in a hamburger. Hamburgers were originally called "hamburg steak," named for the German city of Hamburg, although no actual connection between the place and the food has ever been documented.',
  },
  {
    id: 27,
    category: "Lunch",
    image:
      "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673701378/food-png-2962_voyv6e.webp",
    name: "European Cuisine Salad",
    price: 3000,
    desc: "Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. Served with smooth mashed potatoes and char-grilled, crispy asparagus, topped with a tangy golden-brown glaze for a meal hard to forget.",
  },
];

export default allfoodData;
