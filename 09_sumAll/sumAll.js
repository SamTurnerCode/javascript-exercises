const sumAll = function(min, max) {
if(min < 0 || max < 0) return "ERROR"
if(!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"

if (min > max){
    temp = max
    max = min
    min = temp
}

result = 0;
for (let i = min; i <= max; i++){
    result += i;
}

return result;

};

// Do not edit below this line
module.exports = sumAll;
