const palindromes = function (str) {
    const alph = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let tempStr = str.toLowerCase();
    tempStr = tempStr.split('');
    tempStr = tempStr.filter((char) => alph.includes(char));
    tempStr = tempStr.join('');
    console.log(tempStr);

    let left = 0;
    let right = tempStr.length - 1;

    while (left <= right) {
        if (tempStr[left] != tempStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
