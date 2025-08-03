import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import appointmentRoutes from './routes/appointmentRoute.js';

import dbConnect from './config/dbConnect.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to the database
try {
    dbConnect();
    console.log('Server is running on port', PORT);
    app.listen(PORT);
} catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1); // Exit process with failure
}


// User routes
app.use('/api/users', userRoutes);
app.use('/api/apply', appointmentRoutes);