const container = document.querySelector('.container');
const form = document.calculator.result.value;
console.log(form);
container.addEventListener('click', function (e) {

    numbers = e.target.value;
    console.log(numbers);
    if (numbers === undefined) {
        error();
    } else if (numbers == 'C') {
        numbers = '';
    } else if (numbers == '=') {
        btnresult();
    } else {
        calculate = document.calculator.result.value += numbers;

    }



});

function error() {
    alert('Press numbers');
}

// function getoperand(e) {
//     var input_var = document.getElementById('hasil');
//     switch (e) {
//         case '+':
//             input_var += '+';
//             break;
//         case '-':
//             input_var += '-';
//             break;
//         case '*':
//             input_var += '*';
//             break;
//         case '/':
//             input_var += '/';
//             break;
//         case '%':
//             input_var += '%';
//     }
// }

function btnclear() {
    var clear = document.getElementById('hasil');
    clear.value = '';

}

function btnresult() {

    ans = eval(calculate);
    document.calculator.result.value = ans;
}