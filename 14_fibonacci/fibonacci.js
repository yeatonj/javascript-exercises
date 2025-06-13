const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) {
        return "OOPS";
    } else if (num == 0) {
        return 0;
    } else if (num == 1 || num == 2) {
        return 1;
    }
    let prev1 = 1;
    let prev2 = 1;
    let tempNum = 3;
    let res = 2;
    while (tempNum < num) {
        prev1 = prev2;
        prev2 = res;
        res = prev1 + prev2;
        tempNum += 1;
    }
    return res;
};

// Do not edit below this line
module.exports = fibonacci;
