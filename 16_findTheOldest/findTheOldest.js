const findTheOldest = function(obj) {
    return obj.reduce((prev, curr) => {
        let personAge = age(curr);
        if (personAge > prev.age) {
            return {name:curr.name, age:personAge};
        } else {
            return prev;
        }
    }, {name:"", age:0,});
};

function age(obj) {
    if (obj.yearOfDeath === undefined) {
        return new Date().getFullYear() - obj.yearOfBirth;
    } else {
        return obj.yearOfDeath - obj.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
