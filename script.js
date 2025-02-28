var max_value, operand1 = 0, operand2 = 0;
var flag = 0, sign = "+", input = "";

function setMaxValue(value) {
    max_value = value;
}

function setSign(x) {
    if (x === "+") {
        flag = 0;
    } else if (x === "-") {
        flag = 1;
    } else if (x === "*") {
        flag = 2;
    }
    sign = x;
}

function fOperand() {
    return Math.floor(Math.random() * max_value);
}

function sOperand() {
    if (flag === 0 || flag === 2) {
        return Math.floor(Math.random() * (max_value - operand1));
    } else {
        return Math.floor(Math.random() * operand1);
    }
}

function inputSign(x) {
    if (x === "10") {
        let correctAnswer;
        if (flag === 0) {
            correctAnswer = operand1 + operand2;
        } else if (flag === 1) {
            correctAnswer = operand1 - operand2;
        } else {
            correctAnswer = operand1 * operand2;
        }

        let resultField = document.forms["test"].r0;
        if (correctAnswer === parseInt(input)) {
            resultField.value = "Вірно!";
        } else {
            resultField.value = "Спробуй ще!";
            document.forms["test"].result.value = "";
            input = "";
        }
    } else {
        input += x;
        document.forms["test"].result.value = input;
    }
}

function mainCalc() {
    operand1 = fOperand();
    operand2 = sOperand();
    
    let form = document.forms["test"];
    form["op1"].value = operand1;
    form["op2"].value = operand2;
    form["s_sign"].value = sign;
    input = "";
    form["result"].value = "";
    form["r0"].value = "???";
}