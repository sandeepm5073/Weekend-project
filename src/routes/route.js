const goodsController = require("../controllers/goodsController");
const orderController = require("../controllers/orderController");
const itemController = require("../controllers/itemController");

// const middleWare = require("../middlewares/auth");

const express = require("express");
const router = express.Router();

//APIs
router.post("/grnLine", goodsController.createGoodsLine);
router.post("/grn", goodsController.createGoods);
router.get("/grn", goodsController.getGoods)
router.put("/grn/:id", goodsController.updateGoods)
router.delete("/grn/:id", goodsController.deleteGoods)


router.post("/orderLine", orderController.createOrderLine);
router.post("/order", orderController.createOrder);
router.get("/order", orderController.getOrder)
router.put("/order/:_id", orderController.updateOrder)
router.delete("/order/:_id", orderController.deleteOrder)

    
router.post("/items", itemController.createItem);
router.get("/items", itemController.getItem)
module.exports = router;