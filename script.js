<<<<<<< HEAD
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg"
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg"
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"
=======
let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
>>>>>>> new
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg"
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
<<<<<<< HEAD

const isBot = (door) => {
  if(door.src === botDoorPath) {
=======
let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;

const isClicked = (door) => {
  if (door.src == closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const isBot = (door) => {
  if (door.src === botDoorPath) {
>>>>>>> new
    return true;
  } else {
    return false;
  }
<<<<<<< HEAD
  }


const isClicked = (door) => {
  if (door.src === closedDoorPath) {
  return false;
} else {
  return true;
}
}
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
  gameOver('win');
}
else if (isBot(door)) {
gameOver('lose')
}
}

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
  openDoor1 = botDoorPath;
  openDoor2 = beachDoorPath;
  openDoor3 = spaceDoorPath;
} else if (choreDoor === 1) { 
  openDoor2 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor3 = spaceDoorPath;
} else{(choreDoor === 2)
  openDoor3 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor2 = spaceDoorPath;
}
}

door1.onclick = () => {
  if(currentlyPlaying && !isClicked(door1)) {
  doorImage1.src = openDoor1;
  playDoor(door1);
}

}
door2.onclick = () => {
  if(currentlyPlaying && !isClicked(door2)) {  
  doorImage2.src = openDoor2;
  playDoor(door2);
=======
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
  }
}

// MVP - If/Else Generator (3 possible combinations)
// const randomChoreDoorGenerator = () => {
//   choreDoor = Math.floor(Math.random() * numClosedDoors);
//   if (choreDoor === 0) {
//     openDoor1 = botDoorPath;
//     openDoor2 = beachDoorPath;
//     openDoor3 = spaceDoorPath;
//   } else if (choreDoor === 1) {
//     openDoor2 = botDoorPath;
//     openDoor1 = beachDoorPath;
//     openDoor3 = spaceDoorPath;
//   } else {
//     openDoor3 = botDoorPath;
//     openDoor1 = beachDoorPath;
//     openDoor2 = spaceDoorPath;
//   }
// }

//Next Steps - Switch Statement Version (6 possible combinations)
const randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * 6);
  switch (choreDoor) {
    case 0:
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 1:
      openDoor1 = botDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = beachDoorPath;
      break;
    case 2:
      openDoor2 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 3:
      openDoor2 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor3 = beachDoorPath;
      break;
    case 4:
      openDoor3 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      break;
    case 5:
      openDoor3 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor2 = beachDoorPath;
      break;
  }
}

door1.onclick = () => {
  if(currentlyPlaying && !isClicked(door1)) {
    door1.src = openDoor1;
    playDoor(door1);
  }
}

door2.onclick = () => {
  if(currentlyPlaying && !isClicked(door2)) {
    door2.src = openDoor2;
    playDoor(door2);
>>>>>>> new
  }
}

door3.onclick = () => {
  if(currentlyPlaying && !isClicked(door3)) {
<<<<<<< HEAD
  doorImage3.src = openDoor3 ;
  playDoor(door3);
=======
    door3.src = openDoor3;
    playDoor(door3);
>>>>>>> new
  }
}

startButton.onclick = () => {
    startRound();
}
<<<<<<< HEAD
const startRound= () =>{
door1.src = closedDoorPath;
door2.src = closedDoorPath;
door3.src = closedDoorPath;
numClosedDoors = 3;
currentlyPlaying = true;
startButton.innerHTML = "Good luck";
randomChoreDoorGenerator();

}

const gameOver= (status) =>{
 if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
     } else {
  startButton.innerHTML = 'Game over! Play again?'
     }
     currentlyPlaying = false;
}
=======

const startRound = () => {
  // Reset all the doors to be closed
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}

const gameOver = (str) => {
  if(str === 'win') {
    startButton.innerHTML = 'You win! Play again?';
    getYourScore();
  } else {
    startButton.innerHTML = "Game over! Play again?"
    score = 0;
    currentStreak.innerHTML = score;
  }
  currentlyPlaying = false;
}

const getYourScore = () => {
  score++;
  currentStreak.innerHTML = score;
  if (score > highScore) {
    highScore = score;
    bestStreak.innerHTML = highScore;
  }
}
>>>>>>> new

 startRound();

startRound();
