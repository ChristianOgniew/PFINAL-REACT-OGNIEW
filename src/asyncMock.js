export const products = [
  {
    id: "1",
    name: "Remera Burberry",
    price: 9000,
    category: "remera",
    img: "../images/BurberryRemera.png",
    stock: 25,
    description: "Remera Burberry color Negro de L a XXL",
  },
  {
    id: "2",
    name: "Remera Moncler",
    price: 10000,
    category: "remera",
    img: "../images/MonclerRemera.png",
    stock: 20,
    description: "Remera Moncler color Negro de L a XXL",
  },
  {
    id: "3",
    name: "Remera Essentials",
    price: 8000,
    category: "remera",
    img: "../images/EssentialRemera.png",
    stock: 15,
    description: "Remera Essentials color Negro de L a XXL",
  },
  {
    id: "4",
    name: "Beannie North The Face",
    price: 3000,
    category: "accesorios",
    img: "../images/BeannieNTF.png",
    stock: 6,
    description: "Beannie NTF Negro",
  },
  {
    id: "5",
    name: "Mochila Herschel",
    price: 9000,
    category: "accesorios",
    img: "../images/MochilaHerschel.png",
    stock: 3,
    description: "Mochila Herschel Negra",
  },
  {
    id: "6",
    name: "Beannie Versace",
    price: 4000,
    category: "accesorios",
    img: "../images/BeannieVersace.png",
    stock: 15,
    description: "Remera Essentials color Negro de L a XXL",
  },
];

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
