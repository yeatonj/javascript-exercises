const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return 'ERROR';
    }
    if (start > end) {
        temp = start;
        start = end;
        end = temp;
    }
    let output = 0;
    for (let i = start; i <= end; i++) {
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
