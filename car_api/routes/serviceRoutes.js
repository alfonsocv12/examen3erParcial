const express = require('express');
const router = express.Router();
const serviceController = new (require("../controllers/serviceController")).ServiceController();

router.get('/all', serviceController.getList);
router.post('', serviceController.create);
router.delete('/:service_id', serviceController.delete);

module.exports = router
