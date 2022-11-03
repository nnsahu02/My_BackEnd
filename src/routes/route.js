const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const validatorMiddleware = require("../middlewares/validator.js")


router.post("/createProduct", productController.createProduct)
router.post("/createUser", validatorMiddleware.validateHeader, userController.createUser)
router.post("/creatorder", validatorMiddleware.validateHeader, orderController.createOrder)

module.exports = router;