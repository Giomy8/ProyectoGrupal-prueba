const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');-

router.post('/create', async (req, res) => {
    try {
        const newAppointment = await Appointment.create(req.body);
        res.json(newAppointment);
    } catch (error) {
        res.status(400).json({
            message: 'Error creating medical appointment.'
        });-
    }
});

module.exports = router;
        