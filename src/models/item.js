const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    quantity: Number,
    stockPrice: {
      INR: String,
      DLR: String,
    },
    sellPrice: {
      INR: String,
      DLR: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("item", itemSchema);
