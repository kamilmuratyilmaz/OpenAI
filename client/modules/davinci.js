axios.defaults.baseURL = "http://localhost:8081";

export const davinciGet = async () => {
    try {
        var questionData = {
            question: document.getElementById("question").value,
            temperature: Number(document.getElementById("temperature").value),
            token: Number(document.getElementById("token").value),
            engine: document.getElementById("engine").value,
        }
        questionData.engine = await engineHandler(questionData.engine);
        console.log(`Engine: ${questionData.engine}`);
        const res = await axios.post('/api/openAI', questionData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        Object.entries(questionData).forEach(([key, value]) => setStorage(key, value));
        localStorage.setItem('answer', res.data);
        document.getElementById("answer").innerHTML = res.data;
    } catch (err) {
        if (!(err.response.data === undefined)) {
            alert(err.response.data);
            console.error(err);
        }
        else alert(err + "; Check server connection");
    }
};


const setStorage = (dataKey, item) => {
    localStorage.setItem(dataKey, item);
};

const engineHandler = (engine) => {
    switch (engine) {
        case "Davinci":
            engine = "text-davinci-002"
            break;
        case "Curie":
            engine = "text-curie-001"
            break;
        case "Babbage":
            engine = "text-babbage-001"
            break;
        case "Ada":
            engine = "text-ada-001"
            break;
    }
    return engine;
};

export let questionData = {
    question: await document.getElementById("question").value,
    temperature: await Number(document.getElementById("temperature").value),
    token: await Number(document.getElementById("token").value),
}