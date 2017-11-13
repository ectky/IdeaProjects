function findSymetric(num) {
    for (let j = 1; j <= Number(num[0]); j++) {
        if(isSymetric(j)){
            console.log(j);
        }
    }

    function isSymetric(n) {
        nAsString = String(n);
        for (let i = 0; i < nAsString.length/2; i++) {
            if (nAsString[i] !== nAsString[nAsString.length - 1 - i]){
                return false
            }
        }
        return true;
    }
}

findSymetric(750);