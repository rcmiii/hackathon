/* application.js */

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNegate(number) {
  return (randomInt(0,1) > 0) ? number * -1 : number;
}