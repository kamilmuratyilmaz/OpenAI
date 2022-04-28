// Libs
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Routes
const openAI = require('./router/openAI')

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", openAI);

dotenv.config();

app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(process.env.PORT + " listening ...");
})