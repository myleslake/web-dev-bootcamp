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
const Product = new mongoose.model("Product", productSchema);
const Farm = new mongoose.model("Farm", farmSchema);

// // create instance of model
// const newProduct = new Product({
//     name: "Watermelon",
//     price: 4.99,
//     season: "Summer"
// });

// // save
// await newProduct.save();

// save to db in one step
Product.insertMany(
    { name: "Watermelon", price: 4.99, season: "Summer" },
    { name: "Okra", price: 0.99, season: "Summer" }
);

// save 





