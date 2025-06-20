const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [{
    productId: String,
    name: String,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
