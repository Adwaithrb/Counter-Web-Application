let counterElement = document.getElementById("counterValue");
console.log(counterElement)


function onIncrement(){

    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;

    if (updatedCounterValue > 0){
        counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0){
        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "black"
    }
}

function onDecrement(){

    let decremeantValue = counterElement.textContent
    let newCounterValue = parseInt(decremeantValue) - 1;
    counterElement.textContent  = newCounterValue;

    if (newCounterValue < 0){
        counterElement.style.color = "red";
    }
    else if (newCounterValue > 0){
        counterElement.style.color = "green"
    }
    else{
        counterElement.style.color = "black"
    }

}

function onReset(){

    let resetValue = counterElement.textContent
    let newResetValue = parseInt(resetValue) * 0;
    counterElement.textContent = newResetValue;

    if (newResetValue == 0){
        counterElement.style.color = "black"
    }

}