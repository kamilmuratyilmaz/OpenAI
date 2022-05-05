const app = require("express").Router();
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();

app.post("/openAI", async (req, res) => {
    const bodyArray = await Object.entries(req.body);
    let errors = bodyArray.map(([key, value]) => {
        switch (key) {
            case "question":
                if (value == undefined || value == null || value == "")
                    return "Ask your question "
                break;
            case "temperature":
                if (!(value >= 0 && value <= 1))
                    return "Invalid or missing temperature "
                break;
            case "token":
                if (!(value > 0 && value <= 2800))
                    return "Invalid or missing token "
                break;
        }
    })
    errors = errors.filter(el => { return el !== undefined })
    if (errors != undefined && errors.length > 0) return res.status(400).json(errors);
    try {
        const { question, temperature, token, engine } = await req.body;
        console.log(engine);
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        // engine = "text-davinci-002"
        const response = await openai.createCompletion(engine, {
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