import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import brandRoutes from './routes/brandRoutes';

dotenv.config();

const app = express();
app.use(cors({
  origin: '*', // The port where your React app runs
}));

app.use(express.json());

mongoose.connect("mongodb+srv://muzimoe:MuziMoe7@accentureproject.cxdty.mongodb.net/Brands?retryWrites=true&w=majority&appName=AccentureProject")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


app.use('/api', brandRoutes);

export default app;
