var inputText = document.querySelector("#input");
var btnTranslate = document.querySelector("#button");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function fetchingServerURL(input){
    return serverURL + "?" + "text=" + input;
}

btnTranslate.addEventListener("click", function eventHandler(){
    fetch(fetchingServerURL(inputText.value))
        .then(response => response.json())
        .then(translate => {
            outputDiv.innerText = translate.contents.translated;
        })
        .catch(error => alert("Error occured. "+error))
})