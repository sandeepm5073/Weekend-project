const goods = require("../models/goods");
const goodsLine = require("../models/goodsLineItem");

const createGoodsLine = async (req, res) => {
  try {
    let data = req.body;

    if (!data) {
      return res.status(400).send({ msg: "Please provide data" });
    }

    let createData = await goodsLine.create(data);
    return res.status(200).send({ status: true, data: createData });
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

const createGoods = async (req, res) => {
  try {
    let data = req.body;

    if (!data) {
      return res.status(400).send({ msg: "Please provide data" });
    }
    if (data.invoiceNumber) {
    }
    let createData = await goods.create(data);
    return res.status(200).send({ status: true, data: createData });
  } catch (error) {
    if (error.code == 11000) return res.status(400).send("duplicate key");

    return res.status(500).send({ msg: error.message });
  }
};

const getGoods = async (req, res) => {
  try {
    let data = await goods.find();
    res.status(200).send({ status: true, msg: data });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};

//---- sagar ---- Update APIs ----//

const updateGoods = async (req, res) => {
  try {
    let data = req.body;

    if (!data)
      return res
        .status(400)
        .send({ status: false, msg: "Invalid input details" });
    
    let updatedData = await goods.findOneAndUpdate(
      { _id: req.params.id },
      { status: data.status },
      { new: true }
    );
    
    return res.status(201).send({
      status: true,
      msg: "GRN updated sucessfully",
      data: updatedData,
    });

  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

//----------Delete API -------//
const deleteGoods = async (req, res) => {
  try {
    let data = req.params;

    if (!data)
      return res
        .status(400)
        .send({ status: false, msg: "Invalid input details" });

    let updatedData = await goods.findOneAndUpdate(
      { _id: data.id },
      { isDeleted: true },
      { new: true }
    );

    return res
      .status(201)
      .send({ status: true, msg: "GRN deleted sucessfully" });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports = {
  createGoods,
  createGoodsLine,
  getGoods,
  updateGoods,
  deleteGoods,
};
