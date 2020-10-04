import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const startServer = async () => {
    const app = express();
    app.listen(process.env.PORT || 8080, () => {
        console.log("Listening to port", process.env.PORT || 8080);
    })
};

startServer().then();
