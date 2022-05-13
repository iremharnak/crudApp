//connect this script to the database
require('./config/database')

const Product = require('./models/product');

async function populate() {
  await Product.deleteAll()
  await Product.create({
    
    name: "Zynga",
    brand: "Nike",
    desc: "Chic, colourful and comfortable. This season's must have active piece great for a stroll in the city",
    category: "Activewear",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://drive.google.com/file/d/1oNf8oFqk36y9CTLAsz-R5MGLPgDUUjIZ/view?usp=sharing",
    price: 120
  })
  await Product.create({
    
    name: "Boom",
    brand: "New Balance",
    desc: "If you are going for a run or fancy brunch, this will be your goto piece in your wardrobe. Versatile and comfortable with great heel support",
    category: "Activewear",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://drive.google.com/file/d/1AkXQZf8csZSTvIu1W0DTAOxyht5dV1AX/view?usp=sharing",
    price: 66
  })
  await Product.create({
    
    name: "Air Jordan",
    brand: "Nike",
    desc: "All time classic & great collectible comes back with all recyclable material this time.",
    category: "Activewear",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://drive.google.com/file/d/1pPYgssMe-287fVYsk2-GkVav-7jTA2CY/view?usp=sharing",
    price: 230
  })
  await Product.create({
    
    name: "Basics",
    brand: "Nike",
    desc: "Vibrant and classic. Blends minimal chic with optimal comfort. It's an everyday must. Made with recyclable plastic and reclaimed cotton",
    category: "Activewear",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://drive.google.com/file/d/17F7PNvHNxTqNGkXjGF-s5oAyUAnqnFTs/view?usp=sharing",
    price: 80
  })
  await Product.create({
    
    name: "Hoops",
    brand: "Nike",
    desc: "Vibrant and classic. Blends minimal chic with optimal comfort. It's an everyday must. Made with recyclable plastic and reclaimed cotton",
    category: "Activewear",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://drive.google.com/file/d/17F7PNvHNxTqNGkXjGF-s5oAyUAnqnFTs/view?usp=sharing",
    price: 80
  })
  await Product.create({
    
    name: "Air Light",
    brand: "Nike",
    desc: "Hip and comfortable. Water resistant and breathable. Air with a new twist of ecochic made with reclaimed Air Jordans",
    category: "Activewear",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://drive.google.com/file/d/1tRajH3qM6UWYlIS5ZyBwQIHggut1xMVz/view?usp=sharing",
    price: 100
  })
  await Product.create({
    
    name: "Beat",
    brand: "Nike",
    desc: "Bringing basketball agility to stroll comfort. 100% water, sweat resistant, elastic material. An all time classic with maximum ergonomics.",
    category: "Activewear",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://drive.google.com/file/d/1CwpCyoPj9EIen45vO0mRw6CRoYzS1d-G/view?usp=sharing",
    price: 100
  })
  await Product.create({
    
    name: "Boardwalk",
    brand: "Converse",
    desc: "An all time classic. Blends minimal chic with optimal comfort. It's an everyday must. Made with recyclable plastic and reclaimed cotton.",
    category: "Activewear",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://drive.google.com/file/d/1CwpCyoPj9EIen45vO0mRw6CRoYzS1d-G/view?usp=sharing",
    price: 100
  })
  await Product.create({
    
    name: "Samba",
    brand: "Adidas",
    desc: "Vintage remade with the latest technology. This is a collectible and eco-friendly piece made with reclaimed leather. Soles are made from organic material.",
    category: "Activewear",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://drive.google.com/file/d/1gQN2ouTSUg3iQzG5ksLgb73BiKI5Owto/view?usp=sharing",
    price: 90
  })
  await Product.create({
    
    name: "Classic TM",
    brand: "Nike",
    desc: "If you are going for a run or fancy brunch, this will be your goto piece in your wardrobe. Versatile and comfortable with great heel support.",
    category: "Activewear",
    size: [35, 36, 37, 38, 39, 40, 42],
    imgURL: "https://drive.google.com/file/d/1gQN2ouTSUg3iQzG5ksLgb73BiKI5Owto/view?usp=sharing",
    price: 90
  })
}
populate()