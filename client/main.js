import { davinciGet, questionData } from "./modules/davinci.js";

document.getElementById("request").addEventListener("click", davinciGet);

if (localStorage.getItem('answer')) {
    document.getElementById('answer').innerHTML = localStorage.getItem('answer');
};


const getStorage = (dataKey) => {
    document.getElementById(dataKey).value = localStorage.getItem(dataKey);
};

Object.keys(questionData).forEach((dataKey) => {
    getStorage(dataKey);
})