import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGO_URI;


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
