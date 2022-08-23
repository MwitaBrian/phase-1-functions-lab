// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return (Math.abs(block - 42));
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}


function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400){
    const price = 0;
    return price;
  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
    const price = (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    return price;
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
    const price = 25;
    return price;
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    return 'cannot travel that far'
  }
}