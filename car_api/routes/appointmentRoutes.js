const express = require('express');
const router = express.Router();
const appointmentController = new (require("../controllers/appointmentController")).AppointmentController();

router.post('', appointmentController.create);
router.patch('/update/:appointment_id', appointmentController.update);
router.get('/status_types', appointmentController.appointmentStatusTypes);
router.get('/all/:shop_id', appointmentController.getAllShopId);

module.exports = router
