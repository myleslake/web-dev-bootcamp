const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect to db
mongoose.connect("mongodb://127.0.0.1:27017/practice")
    .then(() => {
        console.log("CONNECTION OPEN!");
    })
    .catch(err => {
        console.log("ERROR CONNECTING TO DATABASE: ");
        console.log(err);
    });

// define schema
const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"]
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
});

// create model from schema
const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// // create instance of model
// const newProduct = new Product({
//     name: "Watermelon",
//     price: 4.99,
//     season: "Summer"
// });

// // save
// await newProduct.save();

// save to db in one step
// Product.insertMany(
//     { name: "Watermelon", price: 4.99, season: "Summer" },
//     { name: "Okra", price: 0.99, season: "Summer" }
// );

// save new farm with a product
const makeFarm = async () => {
    const farm = new Farm({ name: "Myles' Farm", city: "New London, MO" });
    const watermelon = await Product.findOne({ name: "Watermelon" });
    farm.products.push(watermelon);
    await farm.save();
};

//makeFarm();

// add product to existing farm

const addProduct = async () => {
    const farm = await Farm.findOne({ name: "Myles' Farm" });
    const okra = await Product.findOne({ name: "Okra" });
    farm.products.push(okra);
    await farm.save();
};

//addProduct();

// populate method
// Mongoose doesn't do "lazy loading"
// Need to tell it to populate the child objects with populate
const farm = await Farm.findOne({ name: "Myles' Farm" })
    .populate("products")
    .then(f => console.log(f));




