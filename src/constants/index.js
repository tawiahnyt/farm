/** @format */

import {
  FaLeaf,
  FaUsers,
  FaTractor,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";
import { IoShieldHalfSharp } from "react-icons/io5";
import { PiPlantFill } from "react-icons/pi";
import { FaPeopleRoof } from "react-icons/fa6";

import fruitImg from "../../src/assets/fruit-img.jpg";
import vegetableImg from "../../src/assets/vegetable-img.jpg";
import herbImg from "../../src/assets/herbs-and-spice-img.jpg";
import seedlingImg from "../../src/assets/seedlings-img.jpg";

import redCabbageImg from "../assets/pictures/red-cabbage-4805347_1280.jpg";

export const navLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Product & Services", url: "/products-and-services" },
  { title: "Green Development", url: "/green-development" },
  { title: "Contact Us", url: "/contact" },
];

export const productsItem = [
  {
    name: "Red Cabbage",
    url: "#red-cabbage",
    id: "red-cabbage",
    img: redCabbageImg,
    text: "A nutrient-packed vegetable rich in antioxidants and fiber, red cabbage has a slightly peppery taste. It’s great for salads, slaws, or even as a cooked dish.",
  },
  {
    name: "Cherry Tomatoes",
    url: "#cherry-tomatoes",
    id: "cherry-tomatoes",
    img: '../../src/assets/pictures/tomatoes-1280859_1280.jpg',
    text: "These sweet, bite-sized tomatoes are a versatile addition to salads, pasta, or even eaten on their own. They are packed with vitamins and antioxidants like lycopene.",
  },
  {
    name: "Cayenne",
    url: "#cayenne",
    id: "cayenne",
    img: '../../src/assets/pictures/cayenne-peppers-2779834_1280.jpg',
    text: "A fiery hot spice made from dried and ground cayenne peppers, this spice is often used to add heat to dishes and has metabolism-boosting properties.",
  },
  {
    name: "Bell Pepper",
    url: "#bell-pepper",
    id: "bell-pepper",
    img: '../../src/assets/pictures/bell-peppers-2708680_1280.jpg',
    text: "A crunchy, sweet pepper available in various colors (red, yellow, green, orange), bell peppers are a rich source of vitamins A and C and are great in salads, stir-fries, or stuffed.",
  },
  {
    name: "Okro",
    url: "#okro",
    id: "okro",
    img: '../../src/assets/pictures/okra-1386365_1280.jpg',
    text: "Known as 'okra' in some regions, it's a green vegetable often used in soups and stews. It's packed with vitamins, fiber, and has a distinctive, slimy texture when cooked.",
  },
  {
    name: "Garden Eggs",
    url: "#garden-eggs",
    id: "garden-eggs",
    img: '../../src/assets/pictures/Garden Eggs.png',
    text: "A type of eggplant often found in African cuisine, garden eggs have a slightly bitter taste and are used in stews, curries, and grilled dishes.",
  },
  {
    name: "Maize",
    url: "#maize",
    id: "maize",
    img: '../../src/assets/pictures/corn-8028831_1280.jpg',
    text: "A staple food in many parts of the world, maize is versatile, from corn on the cob to meal forms like cornmeal or flour. It's rich in carbs and a source of fiber.",
  },
  {
    name: "Anis Seeds",
    url: "#anis-seeds",
    id: "anis-seeds",
    img: '../../src/assets/pictures/Anis Seeds.png',
    text: "Known for their sweet, licorice-like flavor, anise seeds are often used in baking, cooking, and even in herbal teas. They also have digestive benefits",
  },
  {
    name: "Black Pepper",
    url: "#black-pepper",
    id: "black-pepper",
    img: '../../src/assets/pictures/black-pepper-83086_1280.jpg',
    text: "A classic spice, black pepper is made from dried peppercorns. It's used to add heat and flavor to nearly any dish and has anti-inflammatory benefits.",
  },
  {
    name: "Cinnamon",
    url: "#cinnamon",
    id: "cinnamon",
    img: '../../src/assets/pictures/food-3902024_1280.jpg',
    text: "A fragrant spice with sweet, warm notes, cinnamon is used in both sweet and savory dishes. It's also known for its potential health benefits, such as blood sugar regulation.",
  },
  {
    name: "Cloves",
    url: "#cloves",
    id: "cloves",
    img: '../../src/assets/pictures/cloves-2485102_1280.jpg',
    text: "Strongly aromatic, cloves are used in many cuisines for their warm, sweet, and slightly bitter flavor. They’re great in stews, soups, and even in mulled beverages.",
  },
  {
    name: "Bay leaves",
    url: "#bay-leaves",
    id: "bay-leaves",
    img: '../../src/assets/pictures/bay-leaf-2942399_1280.jpg',
    text: "These aromatic leaves are typically used in soups, stews, and sauces, and while they’re not meant to be eaten, they add a depth of flavor during cooking.",
  },
  {
    name: "Parsley",
    url: "#parsley",
    id: "parsley",
    img: '../../src/assets/pictures/parsley-393028_1280.jpg',
    text: "A bright green herb often used as garnish, parsley also adds fresh flavor to dishes like salads, soups, and sauces. It's a good source of vitamins A, C, and K.",
  },
  {
    name: "Dry onion",
    url: "#dry-onion",
    id: "dry-onion",
    img: '../../src/assets/pictures/Dry onion.png',
    text: "Dried onions retain a concentrated flavor and are a pantry staple for adding savory depth to stews, soups, sauces, and seasoning blends.",
  },
  {
    name: "Garlic flakes",
    url: "#garlic-flakes",
    id: "garlic-flakes",
    img: '../../src/assets/pictures/garlic-3419544_1280.jpg',
    text: "These are dried garlic pieces that can be rehydrated and used in dishes for a strong, savory flavor. Garlic is known for its immune-boosting and anti-inflammatory properties.",
  },
  {
    name: "Dry ginger",
    url: "#dry-ginger",
    id: "dry-ginger",
    img: '../../src/assets/pictures/Dry ginger.png',
    text: "The dried form of ginger offers a zesty, spicy flavor perfect for baking, curries, or teas. It also aids digestion and has anti-inflammatory effects.",
  },
  {
    name: "Turmeric",
    url: "#turmeric",
    id: "turmeric",
    img: '../../src/assets/pictures/Turmeric.png',
    text: "A bright yellow root with earthy flavor, turmeric is commonly used in curries. It contains curcumin, known for its potent anti-inflammatory and antioxidant properties.",
  },
  {
    name: "Cayenne pepper",
    url: "#cayenne-pepper",
    id: "cayenne-pepper",
    img: '../../src/assets/pictures/cayenne-peppers-2779834_1280.jpg',
    text: "A hot, spicy powder made from dried cayenne peppers. It's used in small quantities to add a fiery kick to dishes and can also help with metabolism.",
  },
  {
    name: "Water melon",
    url: "#water-melon",
    id: "water-melon",
    img: '../../src/assets/pictures/water-melon-1652093_1280.jpg',
    text: "A sweet, hydrating fruit perfect for hot days. Watermelon is packed with vitamins A and C, plus it's mostly water, making it super refreshing.",
  },
  {
    name: "Miracle Berry",
    url: "#miracle-berry",
    id: "miracle-berry",
    img: '../../src/assets/pictures/Miracle berries.png',
    text: "A unique fruit known for temporarily altering your taste buds, making sour foods taste sweet. It's used for creating fun, flavor-changing experiences.",
  },
  {
    name: "Plantain",
    url: "#plantain",
    id: "plantain",
    img: '../../src/assets/pictures/plantain.jpg',
    text: "Similar to bananas but starchier, plantains are often cooked before eating. They can be fried, boiled, or baked and are a staple in many tropical cuisines.",
  },
  {
    name: "Coconut",
    url: "#coconut",
    id: "coconut",
    img: '../../src/assets/pictures/coconut-1036198_1280.jpg',
    text: "A versatile fruit, coconut provides water, milk, and meat. It's used in cooking, baking, and even skincare, with a sweet and rich flavor that adds depth to both savory and sweet dishes",
  },
];

export const ourValues = [
  {
    icon: FaLeaf,
    title: "Quality and Health and Wellness",
    description:
      "Delivering fresh, organic, and high-quality products that meet the highest safety and nutritional standards, encouraging healthy living for individuals and families.",
  },
  {
    icon: IoShieldHalfSharp,
    title: "Integrity and Customer Focus",
    description:
      "Conducting business with honesty, transparency, and ethical practices, while putting customers at the center of every decision to ensure their needs are met with excellent service and reliable products.",
  },
  {
    icon: PiPlantFill,
    title: "Sustainability and Respect for Nature",
    description:
      "Commitment to eco-friendly farming practices that protect the environment, conserve resources, and preserve biodiversity while promoting long-term agricultural health.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Continuously seeking new methods and technologies to improve agricultural production, reduce waste, and meet changing consumer needs.",
  },
];

export const ourGoals = [
  {
    style: "md:border-r md:border-gray-200 md:border-b",
    icon: FaPeopleRoof,
    title: "Provide Affordable and Quality Food for Communities",
    description:
      "Ensure local access to nutritious, safe, and affordable food by supporting sustainable food production.",
  },
  {
    style: "md:border-gray-200 md:border-b",
    icon: FaUsers,
    title: "Create Jobs",
    description:
      "Generate employment opportunities in agriculture, food production, and related sectors to boost local economies.",
  },
  {
    style: "md:border-l md:border-gray-200 md:border-b",
    icon: FaTractor,
    title: "Improve Agricultural Practices",
    description:
      "Promote sustainable, efficient farming techniques to increase productivity while protecting the environment.",
  },
  {
    style: "md:border-r md:border-gray-200",
    icon: FaHandshake,
    title: "Empower Individuals to Be Independent",
    description:
      "Provide training and resources to help individuals gain self-sufficiency and improve their livelihoods.",
  },
  {
    style: "",
    icon: IoShieldHalfSharp,
    title: "Provide Food Security",
    description:
      "Ensure consistent access to enough food for everyone, even during shortages or crises.",
  },
  {
    style: "md:border-l md:border-gray-200",
    icon: PiPlantFill,
    title: "Promote Respect for the Environment",
    description:
      "Encourage environmentally friendly practices, such as reducing waste and conserving resources.",
  },
];

export const featureProducts = [
  {
    img: vegetableImg,
    title: "Fresh Vegetables",
    description:
      "Eating a rainbow of vegetables not only delights the palate but also provides a wealth of antioxidants that promote well-being.",
  },
  {
    img: fruitImg,
    title: "Fresh Fruits",
    description:
      "Whether you're making a refreshing smoothie or a vibrant salad, our fruits are sure to elevate your meals.",
  },
  {
    img: herbImg,
    title: "Herbs and Spice",
    description:
      "Elevate your cooking with fresh herbs like basil and cilantro, which enhance flavor and provide health benefits for delicious, nutritious meals.",
  },
  {
    img: seedlingImg,
    title: "Seedlings",
    description: "Explore our variety of seedlings.",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

// export { heroImg, sectionImg, aboutUsImg };
