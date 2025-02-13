import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/dataBase.js';
import router from './routes/routes.js';
import cors from "cors";


dotenv.config();

const app = express();

connectDatabase();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);


app.listen(process.env.PORT, () => {
    console.log(`Server Listening at port Number ${process.env.PORT}`);
})