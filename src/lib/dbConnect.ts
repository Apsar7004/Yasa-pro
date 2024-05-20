import mongoose from "mongoose";

const connection: { isConnected?: boolean } = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.mongodb_uri!)

        // Connection successful
        console.log("Connected to MongoDB");

        // Update isConnected flag
        connection.isConnected = true;

        // Listen for connection events
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected");
            connection.isConnected = true;
        });

        mongoose.connection.on("error", (err) => {
            console.error("MongoDB connection error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.log("MongoDB disconnected");
            connection.isConnected = false;
        });
    } catch (error) {
        // Connection error
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Error connecting to MongoDB");
    }
}

export default dbConnect;
