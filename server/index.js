import express from 'express';
import * as dotenv from 'dotenv';

import cors from 'cors';
import connectDB from './mongoDB/connect.js';
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post' , postRoutes);
app.use('/api/v1/dalle' , dalleRoutes);

app.get('/', async (req, res) => {
    res.send("Hello world on my DALL-E AI");
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log("Server stared on port https://localhost:8080"));

    }
    catch (error) {
        console.log(error);
    }
}



startServer();
