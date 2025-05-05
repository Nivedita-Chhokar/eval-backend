const mongooose = require('mongoose');
require('dotenv').config();

const connectDB = async() => {
    try {
        const conn = await mongooose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected at ", conn.connection.host);
    } catch (error) {
        console.log("Failed to connect DB");
    }
}

module.exports = connectDB;