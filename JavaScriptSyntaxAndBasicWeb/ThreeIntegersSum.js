function smNumbers([input]) {
    let arr = input.split(' ').map(Number);
    let num1 = arr[0];
    let num2 = arr[1];
    let num3 = arr[2];

    if (num1 + num2 === num3){
        console.log(`${Math.min(num1, num2)} + ${Math.max(num1, num2)} = ${num3}`);
    }
    else if (num1 + num3 === num2){
        console.log(`${Math.min(num1, num3)} + ${Math.max(num1, num3)} = ${num2}`);
    }
    else if (num3 + num2 === num1){
        console.log(`${Math.min(num3, num2)} + ${Math.max(num3, num2)} = ${num1}`);
    }
    else {
        console.log('No');
    }
}

let input = ['8 15 7'];
smNumbers(input);