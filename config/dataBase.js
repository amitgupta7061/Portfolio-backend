import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDatabase = async () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("Database Connected Succesfully");
    }).catch((error) => {console.log(error)});
}

export default connectDatabase;