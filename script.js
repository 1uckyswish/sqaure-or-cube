let squareResult = document.getElementById("squared-result");
let cubedResult = document.getElementById("cubed-result");
let inputNumber = document.getElementById("input-number");
let historyContainer = document.getElementById("history-container");
// target the specific HTML elements with the specific ID names  

// Calculate result within the function =>
const calculateResult = () => {
    squareResult.innerHTML = inputNumber.value * inputNumber.value;
    cubedResult.innerHTML = inputNumber.value * inputNumber.value * inputNumber.value;
    // make a new p tag and add it too the container
    let newNumber = document.createElement("p");
    newNumber.innerHTML = inputNumber.value;
    newNumber.setAttribute("id", "search");
    historyContainer.appendChild(newNumber);
    // Rest input box
    inputNumber.value = "";
};

const deleteLastEntry = () => {
    historyContainer.removeChild(historyContainer.lastChild);
    squareResult.innerHTML = "?";
    cubedResult.innerHTML = "?";
}

const clearHistory = () => {
    while(historyContainer.firstChild){
        historyContainer.removeChild(historyContainer.lastChild);
    }
    squareResult.innerHTML = "?";
    cubedResult.innerHTML = "?";
}