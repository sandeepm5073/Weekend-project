const order = require("../models/order");
const orderLine = require("../models/orderLineItem");


//---------------  Create APIs  ---------------//


const createOrderLine = async(req, res) => {
    let data = req.body
    if (!data) {
        res.status(400).send({ msg: "Please provide data" });
    }
    let createData = await orderLine.create(data);
    res.status(200).send({ status: true, data: createData });
};

const createOrder = async(req, res) => {
    let data = req.body
    if (!data) {
        res.status(400).send({ msg: "Please provide data" });
    }
    let createData = await order.create(data);
    res.status(200).send({ status: true, data: createData });
};


//------------------  Get API  --------------------------//

const getOrder = async(req, res) => {
    try {
        let data = await order.find()
        res.status(200).send({ status: true, msg: data })
    } catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
};


//-------------------  Update API ---------------------//


const updateOrder = async(req, res) => {
    try{
        let orderId = req.params._id;
         let data = req.body
        if(!orderId) return res.status(400).send({status:false, msg : "Invalid input details"})

        let updatedData = await order.findOneAndUpdate(
            {_id:orderId},
            {status:data.status},
            {new:true})

            return res.status(201).send({status:true , msg :"GRN updated sucessfully", data:updatedData });
    }catch(error){
    res.status(500).send({status:false,msg:error.message})}
};


//--------Delete API-----//


const deleteOrder = async(req, res) => {
    
    try{
        let data = req.body

        if(!data) return res.status(400).send({status:false, msg : "Invalid input details"})

        let updatedData = await order.findOneAndUpdate(
            {_id:req.params._id},
            { isDeleted : data.isDeleted},
            {new:true})

            return res.status(201).send({status:true , msg :"GRN deleted sucessfully" });   
    }catch(error){
    res.status(500).send({status:false,msg:error.message})}
};



module.exports = {createOrderLine, createOrder, getOrder, updateOrder, deleteOrder };