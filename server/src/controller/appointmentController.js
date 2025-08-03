import express from 'express';
import appointmentModel from '../models/appointmentModel.js';

export const appointment = async (req, res) => {
    const { name, email, date, time } = req.body;
    try {
        const newAppointment = new appointmentModel({
            name,
            email,
            date,
            time
        });
        await newAppointment.save();
        res.status(200).json(newAppointment);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};