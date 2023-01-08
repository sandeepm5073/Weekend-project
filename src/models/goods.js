const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
//Goods received note is a document that acknowledges
//the delivery of goods to a customer by a supplier

const goodsSchema = new mongoose.Schema(
  {
    vendorName: {
      type: String,
      required: true,
    },

    vendorFullAddress: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["GENERATED", "COMPLETED", "CANCELLED"],
      default: "GENERATED",
    },

    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
    },

    grnLineItems: {
      type: [ObjectId],
      ref: "goodsLine",
    },

    date: {
      type: Date,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("good", goodsSchema);
