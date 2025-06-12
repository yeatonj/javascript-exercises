const removeFromArray = function() {
    const args = Array.from(arguments);
    if (args.length <2) {
        return;
    }
    let initArr = args[0];
    for (let i = 1; i < args.length; i++) {
        let searchItem = args[i];
        for (let j = 0; j < initArr.length; j++) {
            if (initArr[j] === searchItem) {
                initArr.splice(j,1);
                j--;
            }
        }
    }
    return initArr;
};

// Do not edit below this line
module.exports = removeFromArray;
