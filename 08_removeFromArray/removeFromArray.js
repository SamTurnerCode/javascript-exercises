const removeFromArray = function(array, ...removeValues) {

    resultArray = [];
    for (let i = 0; i < array.length; i++){
        if(!removeValues.includes(array[i])){
            resultArray.push(array[i])
        }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
