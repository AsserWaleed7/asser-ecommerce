const mockProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    image: "https://tse4.mm.bing.net/th/id/OIP.SeChhfNrQrJEiVyWuy41WgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Electronics",
    description: "Latest iPhone with advanced camera system",
    stock: 10
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 899,
    image: "https://www.pricerunner.com/product/3037407366/Samsung-Galaxy-S24-Ultra-1TB.jpg",
    category: "Electronics",
    description: "Premium Android smartphone",
    stock: 15
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: 1999,
    image: "https://tse1.mm.bing.net/th/id/OIP.aL93CFONZ1clcLvTehBLTgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Electronics",
    description: "Powerful laptop for professionals",
    stock: 5
  },
  {
    id: 4,
    name: "Nike Air Max",
    price: 129,
    image: "https://tse1.mm.bing.net/th/id/OIP.dpzg3qnfocw7AJjYQOkj9gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Fashion",
    description: "Comfortable running shoes",
    stock: 20
  },
  {
    id: 5,
    name: "Playstation 5",
    price: 2000,
    image: "https://m.media-amazon.com/images/I/51fM0CKG+HL.jpg",
    category: "Electronics",
    description: "Latest version of playstation",
    stock: 13
  },
  {
    id: 6,
    name: "Dodge",
    price: 50,
    image: "https://www.ninjaafood.com/cdn/shop/files/24a0be69974f49ffc4646af27469358a.jpg?v=1725010604&width=1445",
    category: "Cream",
    description: "Cream for curly hair",
    stock: 13
  },
  {
    id: 7,
    name: "Cap",
    price: 20,
    image: "https://tse2.mm.bing.net/th/id/OIP.VxpRLnD2QvHptGOZJ6OGFAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Caps",
    description: "A stylish and comfortable cap designed for everyday wear.",
    stock: 35
  }
];

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 500);
  });
};

export const getProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find(p => p.id === parseInt(id));
      resolve(product);
    }, 300);
  });
};

export const searchProducts = async (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = mockProducts.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 300);
  });
};
export const apiService = {
  getProducts,
  getProductById,
  searchProducts
};
