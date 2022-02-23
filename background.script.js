const contextMenuItem = {
    "id": "searchWord",
    "title": "Lookup",
    "contexts": ["selection"]
};

let lookupWord = "";

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(lookUpCurrentWord);

function lookUpCurrentWord(clickedData) {
    lookupWord = clickedData.selectionText;
    localStorage.setItem("currentLookupWord", lookupWord);
}