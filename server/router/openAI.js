const app = require("express").Router();
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();

app.post("/openAI", async (req, res) => {
    try {
        const { question, temperature, token } = await req.body;
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion("text-davinci-002", {
            prompt: question,
            temperature: temperature,
            max_tokens: token,
        });
        return res.status(200).json(response.data.choices[0].text);
    } catch (err) {
        res.status(500).send("Error in API call")
    }
})

module.exports = app;