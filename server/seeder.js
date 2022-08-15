require('dotenv').config();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Pizza = require("./model/pizzaModel");
const Pizzas = require("./data/pizza-data");

//config dot env and mongodb conn file
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});


//import data
const importData = async () => {
  try {
    await Pizza.deleteMany();
    const sampleData = Pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(sampleData);
    console.log("DATA Imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}