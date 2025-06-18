const reverseString = function(string) {
    returnString = ""
    stringArray = string.split('');
    stringLength = string.length;

    for (let i = stringLength - 1; i >= 0; i--){
        returnString += stringArray[i]
        console.log(stringArray[i])
    }

    return returnString;

};

// Do not edit below this line
module.exports = reverseString;
