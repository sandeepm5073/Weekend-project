const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerFullAddress: { type: String, required: true },
    status: {
      type: String,
      enum: ["GENERATED", "COMPLETED", "CANCELLED"],
      required: true,
    },
    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
    },
    orderLineItems: {
      type: [ObjectId],
      ref: "orderLine",
    },
    // date: new Date(),
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
