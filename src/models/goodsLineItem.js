const mongoose = require("mongoose");

const goodsLineSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    quantity: Number,
    stockPrice: {
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

module.exports = mongoose.model("goodsLine", goodsLineSchema);
