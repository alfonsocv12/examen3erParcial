const express = require('express');
const router = express.Router();
const serviceController = new (require("../controllers/serviceController")).ServiceController();

router.get('/', serviceController.getList);
router.get('/get-one', serviceController.getOne);
router.post('/create', serviceController.create);
router.delete('/delete', serviceController.delete);

module.exports = router
