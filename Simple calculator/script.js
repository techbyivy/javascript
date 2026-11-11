let firstnumber = prompt("Enter the First Number:");
let secondnumber = prompt("Enter the Second Number:");
let operatorsign = prompt("Enter the Operand: ");
let answer;

firstnumber = Number(firstnumber);
secondnumber = Number(secondnumber);

function add(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}

function multiplication(a, b) {
  return a * b;
}

switch (operatorsign) {
  case "+":
    answer= add(firstnumber, secondnumber);
    break;
  case "-":
    answer= subtraction(firstnumber, secondnumber);
    break;
    case "/":
        if(firstnumber===0 || secondnumber===0){
            alert("error");
        }
        answer= division(firstnumber, secondnumber);
        break;
        case "*" :
            answer= multiplication(firstnumber, secondnumber);
            break;
            default:
            alert(`invalid operand`);
}

alert(  ` Answer is: ${answer}`)