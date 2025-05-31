const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    price: 12,
    rating: 5,
    description: "A novel about the injustices of the American South, seen through the eyes of a child.",
    mainImage: "product1.webp",
    slug: "to-kill-a-mockingbird",
    manufacturer: "Harper Lee",
    categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
    inStock: 0,
  },
  {
    id: "2",
    title: "1984",
    price: 14,
    rating: 0,
    description: "A dystopian classic exploring surveillance, truth, and totalitarianism.",
    mainImage: "product2.webp",
    slug: "1984-orwell",
    manufacturer: "George Orwell",
    categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
    inStock: 0,
  },
  {
    id: "3",
    title: "Pride and Prejudice",
    price: 10,
    rating: 4,
    description: "A romantic novel that also critiques social class in 19th-century England.",
    mainImage: "product3.webp",
    slug: "pride-and-prejudice",
    manufacturer: "Jane Austen",
    categoryId: "782e7829-806b-489f-8c3a-2689548d7153",
    inStock: 1,
  },
  {
    id: "4",
    title: "The Hobbit",
    price: 15,
    rating: 5,
    description: "A fantasy adventure about Bilbo Baggins and a dragon's treasure.",
    mainImage: "product4.webp",
    slug: "the-hobbit",
    manufacturer: "J.R.R. Tolkien",
    categoryId: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    inStock: 1,
  },
  {
    id: "5",
    title: "The Catcher in the Rye",
    price: 13,
    rating: 4,
    description: "A story of teenage alienation and rebellion.",
    mainImage: "product5.webp",
    slug: "catcher-in-the-rye",
    manufacturer: "J.D. Salinger",
    categoryId: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    inStock: 1,
  },
  {
    id: "6",
    title: "The Da Vinci Code",
    price: 18,
    rating: 4,
    description: "A fast-paced thriller involving secret societies and historical puzzles.",
    mainImage: "product6.webp",
    slug: "da-vinci-code",
    manufacturer: "Dan Brown",
    categoryId: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    inStock: 1,
  },
  {
    id: "7",
    title: "A Brief History of Time",
    price: 20,
    rating: 5,
    description: "Stephen Hawking explores time, space, and the universe.",
    mainImage: "product7.webp",
    slug: "brief-history-of-time",
    manufacturer: "Stephen Hawking",
    categoryId: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    inStock: 1,
  },
  {
    id: "8",
    title: "The Alchemist",
    price: 11,
    rating: 5,
    description: "A philosophical novel about following your dreams.",
    mainImage: "product8.webp",
    slug: "the-alchemist",
    manufacturer: "Paulo Coelho",
    categoryId: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    inStock: 1,
  },
  {
    id: "9",
    title: "The Shining",
    price: 17,
    rating: 3,
    description: "A psychological horror story set in an isolated hotel.",
    mainImage: "product9.webp",
    slug: "the-shining",
    manufacturer: "Stephen King",
    categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    inStock: 1,
  },
  {
    id: "10",
    title: "The Great Gatsby",
    price: 12,
    rating: 3,
    description: "A story of wealth, love, and illusion in the Jazz Age.",
    mainImage: "product10.webp",
    slug: "great-gatsby",
    manufacturer: "F. Scott Fitzgerald",
    categoryId: "782e7829-806b-489f-8c3a-2689548d7153",
    inStock: 1,
  },
  {
    id: "11",
    title: "The Art of War",
    price: 9,
    rating: 5,
    description: "Ancient military strategies still relevant in business and life.",
    mainImage: "product11.webp",
    slug: "art-of-war",
    manufacturer: "Sun Tzu",
    categoryId: "d30b85e2-e544-4f48-8434-33fe0b591579",
    inStock: 1,
  },
  {
    id: "12",
    title: "Sapiens",
    price: 22,
    rating: 5,
    description: "Explores the evolution of human species and civilizations.",
    mainImage: "product12.webp",
    slug: "sapiens-history",
    manufacturer: "Yuval Noah Harari",
    categoryId: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    inStock: 0,
  }
];


const demoCategories = [
  {
    id: "7a241318-624f-48f7-9921-1818f6c20d85",
    name: "classic-fiction",
  },
  {
    id: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
    name: "dystopian",
  },
  {
    id: "782e7829-806b-489f-8c3a-2689548d7153",
    name: "romance",
  },
  {
    id: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    name: "fantasy",
  },
  {
    id: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    name: "philosophical-fiction",
  },
  {
    id: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    name: "thriller",
  },
  {
    id: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    name: "science",
  },
  {
    id: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    name: "horror",
  },
  {
    id: "d30b85e2-e544-4f48-8434-33fe0b591579",
    name: "strategy",
  }
];

async function insertDemoData() {
  
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
  
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
