const findTheOldest = function(people) {
    let oldest;
    const findAge = function(person){
        if(!person.yearOfDeath){
            let currentYear = new Date().getFullYear();
            return  currentYear - person.yearOfBirth;
        }
        return person.yearOfDeath - person.yearOfBirth
    }
    for(let i in people){
        if(!oldest){
            oldest = people[i];
        }
        if(findAge(oldest) < findAge(people[i])){
            oldest = people[i];
        }
    }
    return oldest;
};

const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
