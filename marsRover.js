// Rover Object Goes Here

var rover = {
    direction: "N",
    positionX: 0,
    positionY: 0,
    travelLog: []
  };

// Turn Rover
// Function Left

function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
        rover.direction = "W";
        break;
        case "W":
        rover.direction = "S";
        break;
        case "S":
        rover.direction = "E";
        break;
        case "E":
        rover.direction = "N";
        break;
    }
console.log("turnLeft was called!");
}   

//Function Right 

function turnRight(rover){
    switch (rover.direction) {
        case 'N':
        rover.direction = "E";
        break;
        case "E":
        rover.direction = "S";
        break;
        case "S":
        rover.direction = "W";
        break;
        case "W":
        rover.direction = "N";
        break;
    }
        console.log("turnRight was called!");
}
    
// Moving Forward

function moveForward(rover) {
        switch(rover.direction){
        case 'N': 
            if(rover.positionX = 0 && rover.positionY = 0){
            console.log("Rover cannot move");
            } else {
            rover.positionY -=1;
            }
            break;

            console.log("The new position is " + rover.positionX + roverpositionY);
           
           case 'E':
            if(rover.positionX = 0 && rover.positionY = 9){
            console.log("Rover cannot move");
            } else {   
            rover.positionX +=1;
            }
            break;
            console.log("The new position is " + rover.positionX + roverpositionY);
           
           case 'S':
            if(rover.positionX = 9 && rover.positionY = 9){
            console.log("Rover cannot move");
            } else {
            rover.positionY +=1;
            }
            break;
            console.log("The new position is " + rover.positionX + roverpositionY);
             
           case 'W':
            if(rover.positionX = 9 &&  rover.positionY = 0){
            console.log("Rover cannot move");
            } else {
            rover.positionX -=1;
            }
            break;
            console.log("The new position is " + rover.positionX + roverpositionY);
        }
       }
    

// List of Commands (f, b, l, r)

  function listCommands(arr) {
    for(var i = 0; i < command.length; i++) {
        if (command[i] === 'f') {
            goForward(rover);
        }
        else if (command[i] === 'b') {
            goBack(rover);
        }
        else if (command[i] === 'l') {
            goLeft(rover);
        }
        else if (comand[i] === 'r') {
            goRight(rover);
        }
    }
  
// Tracking

var position = [rover.positionX, rover.positionY]; 
rover.travelLog.push(position);

console.log("Rover's current position is: " + position);
}


