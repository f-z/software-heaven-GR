/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node tool for MongoDB
mongoose.Promise = global.Promise; // Configuring mongoose promises
const Schema = mongoose.Schema; // Importing schema from mongoose

// Product model definition
const productSchema = new Schema({
  id: {
    type: String,
    lowercase: true,
    // unique: true,
    // unique works locally, but not with the sharding that Azure employs
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 20
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

// Exporting module/schema
module.exports = mongoose.model('Product', productSchema);
