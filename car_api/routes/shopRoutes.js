const express = require('express');
const router = express.Router();
const shopController = new (require("../controllers/shopController")).ShopController();

router.post('/create', shopController.create);
router.post('/login', shopController.login);

module.exports = router
