// convertToCelsius(32) // fahrenheit to celsius, should return 0

// convertToFahrenheit(0) // celsius to fahrenheit, should return 32

const convertToCelsius = function(temp) {
  celsius = (temp - 32) * (5/9)
  if(celsius % 1 != 0){
    celsius = celsius.toFixed(1)
  }
  return Number(celsius)
};

const convertToFahrenheit = function(temp) {
  fahrenheit = (temp * (9/5) + 32)
  if(fahrenheit % 1 != 0){
    fahrenheit = fahrenheit.toFixed(1)
  }
  return Number(fahrenheit)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
