const BASE_URL = import.meta.env.BASE_URL;

export const products = [
  {
    id: 1,
    title: "The Legend of Zelda: Tears of the Kingdom",
    price: 349.99,
    rating: 5,
    tag: "Novo",
    img: `${BASE_URL}assets/Zelda_Tears_of_the_Kingdom.jpg`,
  },
  {
    id: 2,
    title: "The Legend of Zelda: Breath of the Wild",
    price: 299.99,
    rating: 5,
    tag: "Coleção",
    img: `${BASE_URL}assets/Zelda_Breath_of_the_Wild.jpg`,
  },
  {
    id: 3,
    title: "The Legend of Zelda: Skyward Sword HD",
    price: 199.99,
    rating: 4,
    tag: "Remaster",
    img: `${BASE_URL}assets/Zelda_Skyward_Sword.jpg`,
  },
  {
    id: 4,
    title: "The Legend of Zelda: Twilight Princess",
    price: 159.99,
    rating: 5,
    tag: "Classico",
    img: `${BASE_URL}assets/Zelda_Twilight_Princess_Box.jpg`,
  },
  {
    id: 5,
    title: "The Legend of Zelda: Majora's Mask 3D",
    price: 149.99,
    rating: 4,
    tag: "Remaster",
    img: `${BASE_URL}assets/Zelda_Breath_of_the_Wild.avif`,
  },
  {
    id: 6,
    title: "The Legend of Zelda: Ocarina of Time",
    price: 139.99,
    rating: 5,
    tag: "Classico",
    img: `${BASE_URL}assets/Zelda_Breath_of_the_Wild.avif`,
  },
];
