const express = require('express');
const router = express.Router();
const appointmentController = new (require("../controllers/appointmentController")).AppointmentController();

router.post('', appointmentController.create);
router.get('/status_types', appointmentController.appointementStatusTypes);

module.exports = router
