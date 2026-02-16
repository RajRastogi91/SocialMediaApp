import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo db connected successfully!");
    } catch (err) {
        console.log("connection failed:",err);
    }
}

export default connectDB;