function sumsByTown(input) {
    input = input.map(JSON.parse)
    let towns = {};
    for (let obj of input) {
        if(obj.town in towns){
            towns[obj.town] += obj.income;
        }
        else {
            towns[obj.town] = obj.income;
        }
    }

    let arr = Object.keys(towns).sort();

    for (let town of arr.sort()) {
        console.log(`${town} -> ${towns[town]}`);
    }

}

sumsByTown(
    ['{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}']
);