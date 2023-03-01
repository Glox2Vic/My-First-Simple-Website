const result = document.getElementById("result");
const keys = document.querySelector(".keys");
let firstNumber = null;
let operator = null;

keys.addEventListener("click", (event) => {
    const button = event.target;
    const buttonValue = button.textContent;

    if (button.classList.contains("number")) {
        appendNumber(buttonValue);
    } else if (button.id === "decimal") {
        appendDecimal();
    } else if (button.classList.contains("operator")) {
        setOperator(buttonValue);
    } else if (button.id === "clear") {
        clear();
    } else if (button.id === "equals") {
        calculate();
    }
});

function appendNumber(number) {
    if (result.value === "0" || operator !== null) {
        result.value = number;
    } else {
        result.value += number;
    }
    operator = null;
}

function appendDecimal() {
    if (!result.value.includes(".")) {
        result.value += ".";
    }
}

function setOperator

