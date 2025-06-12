const reverseString = function(string) {
    output = ""
    for (let i = string.length - 1; i >=0; i--) {
        output += string.charAt(i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
