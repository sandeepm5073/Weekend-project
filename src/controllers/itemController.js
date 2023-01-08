const item = require("../models/item");

exports.createItem = async(req, res) => {
    try {
        let data = req.body;
        if (!data) {
            res.status(400).send({ msg: "Please provide data" });
        }
        let createData = await item.create(data);
        res.status(200).send({ status: true, data: createData });
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
}

exports.getItem = async(req, res) => {
    try {
        let getData = await item.find()
        res.status(200).send({ status: true, data: getData })
    } catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
};