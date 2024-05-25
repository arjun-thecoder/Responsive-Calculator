let result = document.getElementById("result");
let clear = document.getElementById("clear");
let keys = document.querySelectorAll("#calculator .keys button");
let operators = ["+", "-", "*", "/"];
let decimalAdded = false;

for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = function() {
        let input = result.innerHTML;
        let buttonValue = this.innerHTML;

        if (buttonValue == "C") {
            result.innerHTML = "0";
            decimalAdded = false;
        } else if (buttonValue == ".") {
            if (!decimalAdded) {
                result.innerHTML += ".";
                decimalAdded = true;
            }
        } else if (operators.indexOf(buttonValue) > -1) {
            let lastChar = input[input.length - 1];

            if (input != "" && operators.indexOf(lastChar) == -1) {
                result.innerHTML += buttonValue;
                decimalAdded = false;
            } else if (input == "" && buttonValue == "-") {
                result.innerHTML += buttonValue;
            }

            if (operators.indexOf(lastChar) > -1 && input.length > 1)
            {
                result.innerHTML = input.replace(/.$/, buttonValue);
                decimalAdded = false;
            }
        } else if (buttonValue == "=") {
            let equation = input;
            let lastChar = equation[equation.length - 1];
            equation = equation.replace(/x/g, "*").replace(/÷/g, "/");
            
            if (operators.indexOf(lastChar) > -1 || lastChar == ".") {
                equation = equation.replace(/.$/, "");
            }
            
            if (equation) {
                result.innerHTML = eval(equation);
                decimalAdded = false;
            }
        } else {
            if (result.innerHTML == "0") {
                result.innerHTML = buttonValue;
            } else {
                result.innerHTML += buttonValue;
            }
        }

    }
}
