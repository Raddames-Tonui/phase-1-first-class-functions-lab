 // Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0 , 2);
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers =(drivers) =>  drivers.slice(-2)

const  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (integer){
    return function (fare){
        return fare * integer;
    }

}
const fareDoubler = createFareMultiplier(2)
console.log(fareDoubler()); 

const fareTripler = createFareMultiplier(3)
console.log(fareTripler());

function selectDifferentDrivers (drivers, callback){
    return callback(drivers)
}

console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers));