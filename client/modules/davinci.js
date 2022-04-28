const axios = require('axios').default;
const dotenv = require('dotenv');

dotenv.config();

axios.defaults.baseURL = process.env.SERVER_URL;

let question = document.getElementById("question").value;

const davinciGet = async () => {
    try {
        const res = await axios.post('/api/openAI', question, {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        });
        return res = document.getElementById("answer").innerHTML;
    } catch (err) {
        console.error(err);
    }
};

export {
    davinciGet
}