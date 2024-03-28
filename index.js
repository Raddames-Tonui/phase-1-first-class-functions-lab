// Code your solution in this file!
const  returnFirstTwoDrivers = function (drivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
    drivers =['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.splice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



function createFareMultiplier (num){
    function multiplyFare(fare){
         fare * num;
    }
    
    return multiplyFare
}
const fareDoubler = createFareMultiplier()
const  fareTripler = createFareMultiplier()

function selectDifferentDrivers(one,two)

let pink  = returnLastTwoDrivers()
console.log(selectingDrivers);