const express = require('express');
const router = express.Router();
const base_controller = new (require("../controllers/baseController")).BaseController();

router.get('/', base_controller.landing);

module.exports = router
