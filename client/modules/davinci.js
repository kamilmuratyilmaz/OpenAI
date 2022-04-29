axios.defaults.baseURL = "http://localhost:8081";

const davinciGet = async () => {
    try {
        var questionData = {
            question : await document.getElementById("question").value,
        }
        let res = await axios.post('/api/openAI',  questionData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return res = document.getElementById("answer").innerHTML;
    } catch (err) {
        console.log(questionData);
        console.error(err);
    }
};

export {
    davinciGet
}