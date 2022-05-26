let container = document.querySelector(".game-container");
let website = document.querySelectorAll(".websites-iframe");
let survivor = document.querySelector(".survivor");
let picturemap = document.querySelector(".picturemap");
let nft = document.querySelector(".nft");
let asci = document.querySelector(".asci");
let quiz = document.querySelector(".quiz");
let car = document.querySelector(".car");
let canvas = document.querySelector(".game-canvas");
let end_screen = document.querySelector(".final-screen");
let ctx = canvas.getContext("2d");

let TILESIZE = 16;

// images
let char_image = new Image();
char_image.src = "./assets/spritesheet.png";
let bg_bottom_image = new Image();
bg_bottom_image.src = "./assets/bottom.png"
let bg_top_image = new Image();
bg_top_image.src = "./assets/top.png"
let bug = new Image();
bug.src = "./assets/bug.png"
let swatter = new Image();
swatter.src = "./assets/swatter.png"
let cone = new Image();
cone.src = "./assets/cone.png"
let youtube = new Image();
youtube.src = "./assets/youtube.png"
let error = new Image();
error.src = "./assets/error.png"
let code = new Image();
code.src = "./assets/code.png"

// animations
let animations = {
      "idle-down" : [ [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,1] ],
      "idle-right": [ [3,3] ],
      "idle-up"   : [ [0,2] ],
      "idle-left" : [ [3,4] ],
      "walk-down" : [ [0,0],[1,0],[2,0],[3,0],[0,0],[1,1],[2,1],[3,1] ],
      "walk-right": [ [3,3],[0,4],[1,4],[2,4] ],
      "walk-up"   : [ [0,2],[1,2],[2,2],[3,2],[0,3],[0,2],[1,3],[2,3] ],
      "walk-left" : [ [3,4],[0,5],[1,5],[2,5] ]
    }
var state = "idle-down"
var last_direction = "down"
var frame_duration = 5
var frame_counter = frame_duration
var frame = 0
var current_frame = animations[state][frame]
var change = false;
var last_state = state;

function state_handler() {
    if (left) {state = "walk-left"; last_direction = "left";}
    else if (right) {state = "walk-right"; last_direction = "right";}
    else if (down) {state = "walk-down"; last_direction = "down";}
    else if (up) {state = "walk-up"; last_direction = "up";}
    else {
      state = "idle-" + last_direction;
    }
    if (state != last_state) {frame = 0; frame_counter = 0; last_state = state; }
}

function animation_handler() {
  frame_counter -= 1;
  if (frame_counter <= 0) {
    frame += 1;
    if (frame >= animations[state].length) {
      frame = 0;
    }
    frame_counter = frame_duration
  }
  current_frame = animations[state][frame];

  current_speed = speed;
  if (left && down || left && up || right && down || right && up ) {current_speed = diagonal_speed}
}

// map
function csvToArray(csv, delimiter = ",", omitFirstRow = false) {
  console.log(csv.indexOf("\n"));
  return csv
    .slice(omitFirstRow ? csv.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((element) => element.split(delimiter));
}
collision_map_string = `
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1
0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1
0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1
0,-1,1,13,1,-1,-1,-1,0,0,-1,-1,18,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1
0,0,1,1,1,0,0,0,0,0,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1
0,0,-1,-1,-1,0,0,0,0,0,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1
0,-1,-1,-1,-1,1,12,1,0,0,0,0,-1,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1
0,-1,-1,-1,-1,1,1,1,0,0,0,0,-1,0,0,0,-1,-1,-1,-1,0,0,0,0,0
-1,0,0,6,0,0,0,0,0,0,0,0,20,0,0,0,-1,-1,-1,-1,0,0,0,0,0
-1,-1,0,-1,0,-1,-1,0,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0
-1,-1,0,-1,0,-1,-1,0,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,-1,1,8,1,0
-1,-1,0,-1,0,-1,-1,0,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,-1,1,1,1,0
-1,-1,0,-1,0,-1,-1,0,0,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,0,0,0
-1,-1,0,-1,0,-1,-1,0,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,-1,-1,0,0,0
-1,-1,0,-1,0,-1,-1,0,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,-1,1,9,1,0
-1,-1,0,-1,0,-1,0,3,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,5,1,1,1,0
-1,-1,0,-1,0,-1,-1,0,0,0,0,0,0,4,0,0,-1,-1,-1,-1,0,0,0,0,0
-1,-1,0,-1,0,-1,-1,-1,-1,-1,-1,0,0,-1,0,0,0,0,-1,-1,-1,-1,-1,-1,-1
-1,-1,0,-1,0,-1,-1,0,0,0,0,0,0,-1,0,0,0,0,-1,-1,-1,-1,-1,-1,-1
-1,-1,0,-1,0,-1,-1,0,0,0,0,0,0,-1,0,0,0,0,-1,-1,-1,-1,-1,-1,-1
-1,-1,0,-1,0,0,0,0,0,0,0,0,0,-1,-1,1,11,1,0,-1,-1,-1,-1,-1,-1
-1,-1,0,-1,-1,-1,-1,-1,1,10,1,-1,-1,-1,-1,1,1,1,0,-1,-1,-1,-1,-1,-1
-1,-1,0,0,0,0,0,-1,1,1,1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1
-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,-1,-1,-1,-1,-1,-1
-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1

`;
collision = csvToArray(collision_map_string)

function closeAll() {
  website.forEach(web => {
    web.classList.add("hide");
  });
}

var el = 0;

function check_collision(hitbox) {
  for (let y = 0; y < collision.length; y++) {
    for (let x = 0; x < collision[y].length; x++) {
      const element = collision[y][x];
      
      if (hitbox[0] + hitbox[2]> x * TILESIZE && hitbox[0] < x * TILESIZE + TILESIZE && hitbox[1] + hitbox[3] > y * TILESIZE - TILESIZE && hitbox[1] < y * TILESIZE ) {
        if (element == 0) {el = 0}
        if (element == 8) {container.classList.add("left"); picturemap.classList.remove("hide");}
        if (element == 9) {container.classList.add("left"); survivor.classList.remove("hide");}
        if (element == 10) {container.classList.add("left"); nft.classList.remove("hide");}
        if (element == 11) {container.classList.add("left"); asci.classList.remove("hide");}
        if (element == 12) {container.classList.add("left"); quiz.classList.remove("hide");}
        if (element == 13) {container.classList.add("left"); car.classList.remove("hide");}
        if (element == 1) {container.classList.remove("left"); closeAll()}
        if (element == 3) {has_swatter = true}
        if (element == 5) {has_youtube = true}
        if (element == 7) {has_code = true}
        if (element == 2) {el = 1; if(!has_swatter){showMessage("hmm... it seems your code has a bug. see if you can find something to swat it away!");}}
        if (element == 4) {el = 2; if(!has_youtube){showMessage("uh oh! you don't have enough knowledge to enter this section. go watch a video to learn some more!");}}
        if (element == 6) {el = 3; if(!has_code){showMessage("you found an error! go find some code that can fix it...");}}
        if (element == 20) {el = 4; if(!has_youtube || !swatter || !has_code){showMessage("This is a restricted section! You need to solve all of the problems in this project before you can go here!");}}
        if (element == 18) {showMessage("congratulations! <br> you have finished my cs1 coding experience");}
      }
    }
  }
}

function deleteEvents() {
  document.removeEventListener("keydown", (e) => {
    if (e.code == "ArrowLeft") {
      left = true;
      console.log("left");
    }
    if (e.code == "ArrowRight") {
      right = true;
    }
    if (e.code == "ArrowUp") {
      up = true;
    }
    if (e.code == "ArrowDown") {
      down = true;
    }
  }, true);
}

// character
var left = false;
var up = false;
var right = false;
var down = false;
var pos_x = 168 - 48 + 72;
var pos_y = 91 + 32 + 72;
var speed = 1;
var diagonal_speed = 1;
var current_speed = 1;
var hitbox = [pos_x + 3, pos_y + 4, 10, 10];
var left_hitbox = [hitbox[0] - 1, hitbox[1], hitbox[2], hitbox[3]];
var right_hitbox = [hitbox[0] + 1, hitbox[1], hitbox[2], hitbox[3]];
var up_hitbox = [hitbox[0], hitbox[1] - 1, hitbox[2], hitbox[3]];
var down_hitbox = [hitbox[0], hitbox[1] + 1, hitbox[2], hitbox[3]];
var scroll = [48-72, -32-72]
var has_swatter = false;
var has_youtube = false;
var has_code = false;
var has_bug = false;
var has_cone = false;
var has_error = false;

function showMessage(message) {
  end_screen.innerHTML = message;
  end_screen.classList.remove("hide-final-screen");
  setTimeout(() => {
    end_screen.classList.add("hide-final-screen");
  }, 300);
}

// get key input
document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowLeft") {
    left = true;
    console.log("left")
  }
  if (e.code == "ArrowRight") {
    right = true;
  }
  if (e.code == "ArrowUp") {
    up = true;
  }
  if (e.code == "ArrowDown") {
    down = true;
  }
  
});

document.addEventListener("keyup", (e) => {
  if (e.code == "ArrowLeft") {
    left = false;
  }
  if (e.code == "ArrowRight") {
    right = false;
  }
  if (e.code == "ArrowUp") {
    up = false;
  }
  if (e.code == "ArrowDown") {
    down = false;
  }
});

function checkMove(hitbox, direction) {
  check_collision(hitbox)
  if (has_swatter && el == 1) {has_bug = true;}
  if (has_youtube && el == 2) {has_cone = true;}
  if (has_code && el == 3) {has_error = true;}
  if (
    direction &&
    el != 0 &&
    !(el == 1 && has_swatter == false) &&
    !(el == 2 && has_youtube == false) &&
    !(el == 3 && has_code == false) &&
    !(el == 4 && !has_code && !has_swatter && !has_code)
  ) {
    el = -1;
    return true;
  }
  el = -1;
  return false;
}

function startGameLoop() {
    const step = () => {
      //Clear off the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // char move
      if (checkMove(left_hitbox, left)) {pos_x -= current_speed; scroll[0] += 1}
      if (checkMove(right_hitbox, right)) {pos_x += current_speed; scroll[0] -= 1;}
      if (checkMove(up_hitbox, up)) {pos_y -= current_speed; scroll[1] += 1;}
      if (checkMove(down_hitbox, down)) {pos_y += current_speed; scroll[1] -= 1;}
      // update hitbox
      hitbox = [pos_x + 3, pos_y + 4, 10, 10];
      left_hitbox = [hitbox[0] - 1, hitbox[1], hitbox[2], hitbox[3]];
      right_hitbox = [hitbox[0] + 1, hitbox[1], hitbox[2], hitbox[3]];
      up_hitbox = [hitbox[0], hitbox[1] - 1, hitbox[2], hitbox[3]];
      down_hitbox = [hitbox[0], hitbox[1] + 1, hitbox[2], hitbox[3]];

      // animations
      state_handler();
      animation_handler();

      
      //Draw Lower layer
      ctx.drawImage(bg_bottom_image, scroll[0], scroll[1]);


      //Draw Game Object
      ctx.drawImage(char_image, current_frame[0]*16, current_frame[1]*16, 16, 16, pos_x + scroll[0], pos_y + scroll[1], 16, 16);

      //Draw Upper layer
      ctx.drawImage(bg_top_image, scroll[0], scroll[1]);

      // Draw Items
      if (!has_bug) {ctx.drawImage(bug, scroll[0] + TILESIZE * 16, scroll[1]+ TILESIZE * 12);}
      if (!has_swatter) {ctx.drawImage(swatter, scroll[0] + TILESIZE * 7, scroll[1]+ TILESIZE * 15);}
      if (!has_cone) {ctx.drawImage(cone, scroll[0] + TILESIZE * 13, scroll[1]+ TILESIZE * 16);}
      if (!has_youtube) {ctx.drawImage(youtube, scroll[0] + TILESIZE * 20, scroll[1]+ TILESIZE * 15);}
      if (!has_error) {ctx.drawImage(error, scroll[0] + TILESIZE * 3, scroll[1]+ TILESIZE * 8);}
      if (!has_code) {ctx.drawImage(code, scroll[0] + TILESIZE * 17, scroll[1]+ TILESIZE * 23);}
      
      
      requestAnimationFrame(() => {
        step();   
      })
    }
    step();
 }

 startGameLoop();