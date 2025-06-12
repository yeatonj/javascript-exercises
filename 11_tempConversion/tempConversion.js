const convertToCelsius = function(degF) {
  return Math.round((degF - 32) * (50/9)) / 10;
};

const convertToFahrenheit = function(degC) {
  return Math.round(10 * (((9/5) * degC) + 32)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
