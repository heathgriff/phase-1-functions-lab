// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(streetNumber - 42);
}

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination) - 400;
    if (distanceInFeet <= 0) {
        return 0;
    } else if (distanceInFeet <= 1600) {
        return distanceInFeet * .02;
    } else if (distanceInFeet <= 2100) {
        return 25;
    } else if (distanceInFeet > 2100) {
        return 'cannot travel that far';
    }
}