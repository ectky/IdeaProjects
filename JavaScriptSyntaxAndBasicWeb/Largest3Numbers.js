function getLargest(input) {
    let arr = input.map(Number);
    arr = arr.sort((a, b) => b - a);
    let n = Math.min(arr.length, 3);
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);

    }
}

getLargest(['10', '30', '15', '20', '50', '5']);