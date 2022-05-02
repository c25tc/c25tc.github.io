import * as THREE from "./three.module.js";
const scene = new THREE.Scene();

const vehicleColors = [0xa52523, 0xbdb638, 0x78b14b, 0x00dcdc];
const playerCar = Car();
playerCar.castShadow = true;
playerCar.position.x = 0;

scene.add(playerCar);

for (let i = 0; i < 200; i++) {
  const truck = Truck();
  truck.position.x = Math.random() * 8000 - 4000;
  truck.position.y = Math.random() * 8000 - 4000;
  truck.rotation.z = Math.random() * 2 * Math.PI;
  console.log(truck.rotation.z);
  scene.add(truck);
}
const truck = Truck();
scene.add(truck);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(100, -300, 300);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 1024;
dirLight.shadow.mapSize.height = 1024;
dirLight.shadow.camera.left = -400;
dirLight.shadow.camera.right = 350;
dirLight.shadow.camera.top = 400;
dirLight.shadow.camera.bottom = -300;
dirLight.shadow.camera.near = 100;
dirLight.shadow.camera.far = 800;
scene.add(dirLight);

// const cameraWidth = 150;
// const cameraHeight = cameraWidth / aspectRatio;

// const camera = new THREE.OrthographicCamera(
//     cameraWidth / -2,
//     cameraWidth / 2,
//     cameraHeight / -2,
//     cameraHeight / 2,
//     0,
//     1000
//     );
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 2000);

camera.position.set(0, -200, 250);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

function Wheel() {
  const wheel = new THREE.Mesh(
    new THREE.BoxBufferGeometry(12, 33, 12),
    new THREE.MeshLambertMaterial({ color: 0x333333 })
  );
  wheel.position.z = 6;
  return wheel;
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// --------car-----------
function Car() {
  const car = new THREE.Group();

  const main = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60, 30, 15),
    new THREE.MeshLambertMaterial({ color: pickRandom(vehicleColors) })
  );
  main.position.z = 12;
  car.add(main);

  const carFrontTexture = getCarFrontTexture();
  carFrontTexture.center = new THREE.Vector2(0.5, 0.5);
  carFrontTexture.rotation = Math.PI / 2;

  // --------car-----------
  // --------car-----------
  const carBackTexture = getCarFrontTexture();
  carBackTexture.center = new THREE.Vector2(0.5, 0.5);
  carBackTexture.rotation = -Math.PI / 2;

  const carLeftSideTexture = getCarSideTexture();
  carLeftSideTexture.flipY = false;

  const carRightSideTexture = getCarSideTexture();

  const cabin = new THREE.Mesh(new THREE.BoxBufferGeometry(33, 24, 12), [
    new THREE.MeshLambertMaterial({ map: carFrontTexture }),
    new THREE.MeshLambertMaterial({ map: carBackTexture }),
    new THREE.MeshLambertMaterial({ map: carLeftSideTexture }),
    new THREE.MeshLambertMaterial({ map: carRightSideTexture }),
    new THREE.MeshLambertMaterial({ color: 0xffffff }), // top
    new THREE.MeshLambertMaterial({ color: 0xffffff }), // bottom
  ]);
  cabin.position.x = -6;
  cabin.position.z = 25.5;
  car.add(cabin);

  const backWheel = Wheel();
  backWheel.position.x = -18;
  car.add(backWheel);

  const frontWheel = Wheel();
  frontWheel.position.x = 18;
  car.add(frontWheel);

  return car;
}

//canvas
function getCarFrontTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 32;
  const context = canvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 64, 32);

  context.fillStyle = "#666666";
  context.fillRect(8, 8, 48, 24);

  return new THREE.CanvasTexture(canvas);
}

function getCarSideTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 32;
  const context = canvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 128, 32);

  context.fillStyle = "#666666";
  context.fillRect(10, 8, 38, 24);
  context.fillRect(58, 8, 60, 24);

  return new THREE.CanvasTexture(canvas);
}

// ---x----car-------x---
// -------truck----------
function Truck() {
  const car = new THREE.Group();

  var color = pickRandom(vehicleColors);

  const main = new THREE.Mesh(
    new THREE.BoxBufferGeometry(80, 34, 40),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  );
  main.position.z = 28;
  car.add(main);

  const pipe = new THREE.Mesh(
    new THREE.BoxBufferGeometry(20, 26, 5),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  );
  pipe.position.z = 10;
  pipe.position.x = 48;
  car.add(pipe);

  const carFrontTexture = getTruckFrontTexture();
  carFrontTexture.center = new THREE.Vector2(0.5, 0.5);
  carFrontTexture.rotation = Math.PI / 2;

  const carLeftSideTexture = getTruckSideTexture();
  carLeftSideTexture.flipY = false;

  const carRightSideTexture = getTruckSideTexture();

  const cabin = new THREE.Mesh(new THREE.BoxBufferGeometry(24, 30, 30), [
    new THREE.MeshLambertMaterial({ color, map: carFrontTexture }),
    new THREE.MeshLambertMaterial({ color }),
    new THREE.MeshLambertMaterial({ color, map: carLeftSideTexture }),
    new THREE.MeshLambertMaterial({ color, map: carRightSideTexture }),
    new THREE.MeshLambertMaterial({ color }),
    new THREE.MeshLambertMaterial({ color }),
  ]);
  cabin.position.x = 56;
  cabin.position.z = 20;
  car.add(cabin);

  const backWheel = Wheel();
  backWheel.position.x = -18;
  car.add(backWheel);

  const middleWheel = Wheel();
  middleWheel.position.x = 28;
  car.add(middleWheel);

  const frontWheel = Wheel();
  frontWheel.position.x = 56;
  car.add(frontWheel);

  return car;
}

function getTruckFrontTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 64, 64);

  context.fillStyle = "#666666";
  context.fillRect(0, 12, 64, 16);

  return new THREE.CanvasTexture(canvas);
}
function getTruckSideTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 64, 64);

  context.fillStyle = "#666666";
  context.fillRect(30, 12, 64, 16);

  return new THREE.CanvasTexture(canvas);
}

// ---x----truck-------x---
var foward = false;
var backward = false;
var left = false;
var right = false;
var shift = false;

window.addEventListener("keydown", function (event) {
  if (event.key == "ArrowUp") {
    foward = true;
    return;
  }
  if (event.key == "ArrowDown") {
    backward = true;
    return;
  }
  if (event.key == "ArrowLeft") {
    left = true;
    return;
  }
  if (event.key == "ArrowRight") {
    right = true;
    return;
  }
  if (event.key == "Shift") {
    maxSpeed = 6;
    turnSpeed = 150;
    console.log("yes");
    return;
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key == "ArrowUp") {
    foward = false;
    return;
  }
  if (event.key == "ArrowDown") {
    backward = false;
    return;
  }
  if (event.key == "ArrowLeft") {
    left = false;
    return;
  }
  if (event.key == "ArrowRight") {
    right = false;
    return;
  }
  if (event.key == "Shift") {
    maxSpeed = 3;
    turnSpeed = 100;
    return;
  }
});

// Game Variables
var angle = Math.PI / 2;
var velocity = 0;
var maxSpeed = 3;
var acceleration = 0.1;
var turnSpeed = 100;
var collidableMeshList = [truck.children[0]];
console.log(playerCar);
function Game() {
  move();
  updateCamera();
  checkCollision();
}
function move() {
  if (right) {
    angle -= velocity / turnSpeed;
  }
  if (left) {
    angle += velocity / turnSpeed;
  }
  if (foward) {
    velocity += acceleration;
    if (velocity >= maxSpeed) velocity = maxSpeed;
  } else if (backward) {
    velocity -= acceleration;
    if (velocity <= -maxSpeed) velocity = -maxSpeed;
  } else {
    if (velocity < 0) {
      velocity += acceleration * 2;
      if (velocity >= 0) velocity = 0;
    } else {
      velocity -= acceleration * 2;
      if (velocity <= 0) velocity = 0;
    }
  }
  var verticle = Math.sin(angle) * velocity;
  var horizontal = Math.cos(angle) * velocity;

  playerCar.position.x += horizontal;
  playerCar.position.y += verticle;
  playerCar.rotation.z = angle;
}
function updateCamera() {
  camera.lookAt(
    playerCar.position.x,
    playerCar.position.y,
    playerCar.position.z
  );
  camera.position.y = playerCar.position.y - 250;
  camera.position.x = playerCar.position.x;
}
function checkCollision() {
  for (
    var vertexIndex = 0;
    vertexIndex <
    playerCar.children[0].geometry.attributes.position.array.length;
    vertexIndex++
  ) {
    var localVertex = new THREE.Vector3()
      .fromBufferAttribute(
        playerCar.children[0].geometry.attributes.position,
        vertexIndex
      )
      .clone();
    var globalVertex = localVertex.applyMatrix4(playerCar.children[0].matrix);
    var directionVector = globalVertex.sub(playerCar.children[0].position);

    var ray = new THREE.Raycaster(
      playerCar.children[0].position,
      directionVector.clone().normalize()
    );
    var collisionResults = ray.intersectObjects(collidableMeshList);
    if (
      collisionResults.length > 0 &&
      collisionResults[0].distance < directionVector.length()
    ) {
      console.log("yes");
    }
  }
}

setInterval(Game, 10);

window.addEventListener("resize", () => {
  // Adjust camera
  const newAspectRatio = window.innerWidth / window.innerHeight;

  camera.aspect = newAspectRatio;
  camera.updateProjectionMatrix(); // Must be called after change

  // Reset renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
});

var render = function () {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

render();

// todo
// create a function that brings current rotation of car and current place and rotation of camera to target rotation and position of both
// when in the different cases and setting rotation and speed, instead create a variable for that and update it in the function
// to make a smooth effect, move each variable by something like 1/20 of the distance between the two everytime so it moves by less and less each time
