const menuItems = [
  {
    name: "Pizzas",
    menuItems: [
      {
        id: "pepperoniPizza",
        name: "Pepperoni Pizza",
        description:
          "Pepperoni, our signature Old World Pepperoni®, romesan seasoning, our original sauce and signature three cheeses",
        price: 1000,
      },

      {
        id: "cheesePizza",
        name: "Cheese Pizza",
        description: "Our signature five cheese blend and our original sauce.",
        price: 1000,
      },
      {
        id: "supremePizza",
        name: "Supreme Pizza",
        description:
          "Pepperoni, Italian sausage, mushrooms, green peppers, onions, our original sauce and signature three cheeses",
        price: 1000,
      },
      {
        id: "veggiePizza",
        name: "Veggie Pizza",
        description:
          "Mushrooms, black olives, onions, sliced tomatoes, our original sauce and signature three cheeses, plus feta",
        price: 1000,
      },
      {
        id: "hawaiianPizza",
        name: "Hawaiian Pizza",
        description:
          "Ham, pineapple, our original sauce and signature three cheeses",
        price: 1000,
      },
    ],
    sectionImage: {
      path: "./pizza.jpg",
      alt: "Cheese pizza surrounded by decorative garnish",
    },
  },
  {
    name: "Desserts",
    menuItems: [
      {
        id: "cinnamonSticks",
        name: "Cinnamon Sticks",
        description:
          "Fresh-baked, buttery pastry topped with cinnamon and sugar, served with a side of vanilla icing",
        price: 800,
      },

      {
        id: "cannoli",
        name: "Cannoli (2)",
        description:
          "Made in house fresh with a blend of ricotta and mascarpone cheese. ",
        price: 400,
      },
    ],
    sectionImage: {
      path: "./cannoli.jpg",
      alt: "Cannolis on plate filled with cream and chocolate chips",
    },
  },

  {
    name: "Salads",
    menuItems: [
      {
        id: "houseSalad",
        name: "Like a Salad",
        description:
          "Fresh-cut lettuce blend, cheddar cheese, black olives, onions, green peppers, sliced tomatoes and croutons",
        price: 600,
      },
      {
        id: "caesarSalad",
        name: "Caesar Salad",
        description: "Fresh-cut lettuce blend, parmesan cheese and croutons",
        price: 600,
      },
    ],
    sectionImage: {
      path: "./salad.jpg",
      alt: "Salad with garnishes and balsamic vinegarette",
    },
  },

  {
    name: "Beverages",
    menuItems: [
      {
        id: "fountainDrink",
        name: "Fountain Drink",
        description: "Kat's All Natural Small Batch Sodas",
        price: 200,
      },
      {
        id: "beer",
        name: "Beer",
        description:
          "Local IPA made with the finest hops. Ask for a draft list.",
        price: 400,
      },
    ],
    sectionImage: {
      path: "./drink.jpg",
      alt: "Soda in a glass with lemon slice",
    },
  },
];

export default menuItems;
