const express = require('express');
const router = express.Router();
const shopController = new (require("../controllers/shopController")).ShopController();

router.get('/all', shopController.getAll);
router.post('/create', shopController.create);
router.post('/login', shopController.login);

module.exports = router
