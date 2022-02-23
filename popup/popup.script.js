const title = document.getElementById("title");
const meaningElement = document.getElementById("meaning");

const word = localStorage.getItem("currentLookupWord");

title.innerHTML = word;

const xhr = new XMLHttpRequest();
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
xhr.open("GET", url);
xhr.send();

xhr.onload = function() {
    const response = JSON.parse(xhr.response);
    const meaning = response[0].meanings[0].definitions[0].definition;
    meaningElement.innerHTML = meaning;
}