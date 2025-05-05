const express = require('express');
const connectDB = require('./config/db');
const authRouter = require('./routes/authRouter');
const productRouter = require('./routes/productRouter');
const bodyParser = require('body-parser');
require('dotenv').config();

connectDB();

const PORT = process.env.PORT || 8009;

const app = express();

app.use(bodyParser.json());

app.use("/api/products", productRouter);
app.use("/api/auth", authRouter);

app.get("/", (req,res)=>{
    res.status(200).send("Application is running");
});


app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong' });
});

const server = app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
});