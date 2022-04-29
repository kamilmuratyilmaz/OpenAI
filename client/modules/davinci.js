axios.defaults.baseURL = "http://localhost:8081";

export const davinciGet = async () => {
    try {
        var questionData = {
            question: await document.getElementById("question").value,
            temperature: await Number(document.getElementById("temperature").value),
            token: await Number(document.getElementById("token").value),
        }
        const res = await axios.post('/api/openAI', questionData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        Object.entries(questionData).forEach(([key, value]) => setStorage(key, value));
        localStorage.setItem('answer', res.data);
        document.getElementById("answer").innerHTML = res.data;
    } catch (err) {
        alert(err);
        alert("Eksik input olabilir");
        console.error(err);
    }
};


const setStorage = (dataKey, item) => {
    localStorage.setItem(dataKey, item);
};

export let questionData = {
    question: await document.getElementById("question").value,
    temperature: await Number(document.getElementById("temperature").value),
    token: await Number(document.getElementById("token").value),
}