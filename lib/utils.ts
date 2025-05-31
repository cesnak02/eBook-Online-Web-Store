export const categoryMenuList = [
  {
    id: 1,
    title: "Classic fiction",
    src: "/classic-fiction-icon.png",
    href: "/shop/classic-fiction"
  },
  {
    id: 2,
    title: "Dystopian",
    src: "/dystopian-icon.png",
    href: "/shop/dystopian"
  },
  {
    id: 3,
    title: "Romance",
    src: "/romance-book.png",
    href: "/shop/romance"
  },
  {
    id: 4,
    title: "Fantasy",
    src: "/fantasy-icon.png",
    href: "/shop/fantasy"
  },
  {
    id: 5,
    title: "Philosophical fiction",
    src: "/philosophy-icon.png",
    href: "/shop/philosophical-fiction"
  },
  {
    id: 6,
    title: "Thriller",
    src: "/thriller-icon.png",
    href: "/shop/thriller"
  },
  {
    id: 7,
    title: "Science",
    src: "/science-book.png",
    href: "/shop/science"
  },
  {
    id: 8,
    title: "Horror",
    src: "/horror-icon.png",
    href: "/shop/horror"
  },
  {
    id: 9,
    title: "Strategy",
    src: "/strategy-icon.png",
    href: "/shop/strategy"
  },
];

export const incentives = [
  {
    name: "Free Shipping",
    description:
      "Our shipping is completely free and that is completely good for our customers.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our support is working all day and night to answer any question you have.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "We have super fast shopping experience and you will enjoy it.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Discounts", href: "#" },
    { name: "News", href: "#" },
    { name: "Register Discounts", href: "#" },
  ],
  about: [
    { name: "About Ebook", href: "#" },
    { name: "Work With Us", href: "#" },
    { name: "Company Profile", href: "#" },
  ],
  buy: [
    { name: "Ebook Loyalty Card", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Complaints", href: "#" },
    { name: "Partners", href: "#" },
  ],
  help: [
    { name: "Contact", href: "#" },
    { name: "How to Buy at Ebook", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
