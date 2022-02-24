const title = document.getElementById("title");

const word = localStorage.getItem("currentLookupWord");

title.innerText = word;

const xhr = new XMLHttpRequest();
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
xhr.open("GET", url);
xhr.send();

xhr.onload = function() {
    const response = JSON.parse(xhr.response);
    formatResponse(response[0]);
}

function formatResponse(response) {
    const phonetic = document.getElementById("phonetic");
    phonetic.innerText = response.phonetic ? response.phonetic : "";
    const meanings = response.meanings;
    const body = document.getElementById("body");
    for(let meaning of meanings) {
        const definitions = meaning.definitions;
        const meaningDivs = document.createElement("div");
        const partOfSpeechLabel = document.createElement("h3");
        partOfSpeechLabel.appendChild(document.createTextNode(meaning.partOfSpeech));
        meaningDivs.appendChild(partOfSpeechLabel);
        const ul = document.createElement("ul");
        for(let definition of definitions) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(definition.definition));
            ul.appendChild(li);
        }
        meaningDivs.appendChild(ul);
        body.appendChild(meaningDivs);
    }
}