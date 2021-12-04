body = document.getElementById("body");

// -------------usa--------------

function vancouver() {
    body.style = 'background-image: url("./images/backgrounds/Vancouver.png")';
    document.getElementById("usa-vancouver").style = 'display: none;';
    document.getElementById("usa-east-coast").style = 'display: none;';
    document.getElementById("place-back").style = 'display: block; font-size: 60px;';
    document.getElementById("place-back-west").style = 'display: none; font-size: 60px;';
    document.getElementById("dimsum").style = "display: block;";
    document.getElementById("west-house").style = "display: block;";
    document.getElementById("granville").style = "display: block;";
    document.getElementById("hotpot").style = "display: block;";
    document.getElementById("museum").style = "display: block;";
    document.getElementById("play").style = "display: block;";
    document.getElementById("west-resterant").style = "display: block;";
    document.getElementById("rvyc").style = "display: block;";
    document.getElementById("vhike").style = "display: block;";
    document.getElementById("wedding").style = "display: block;";
    document.querySelector(".note").style = "display: none;";
    for (let i = 0; i < 10; i++) {
      var image_x = document.getElementById("img1");
      image_x.parentNode.removeChild(image_x);
      var image_x = document.getElementById("img");
      image_x.parentNode.removeChild(image_x);
      var image_x = document.getElementById("img");
      image_x.parentNode.removeChild(image_x);
    }
}

  function eastCoast() {
    body.style = 'background-image: url("./images/backgrounds/East\ Coast.png"); background-color: rgb(43, 43, 43);';
    document.getElementById("usa-vancouver").style = 'display: none;';
    document.getElementById("usa-east-coast").style = 'display: none;';
    document.getElementById("place-back").style = 'display: block; font-size: 60px;';
    document.getElementById("east-nyc").style = 'display: block;';
    document.getElementById("east-og").style = 'display: block;';
    document.getElementById("east-oldplace").style = 'display: block;';
    document.getElementById("east-newplace").style = 'display: block;';
    document.getElementById("place-back-east").style = 'display: none; font-size: 60px;';
    document.querySelector(".note").style = "display: none;";
    for (let i = 0; i < 10; i++) {
      var image_x = document.getElementById("img1");
      image_x.parentNode.removeChild(image_x);
      var image_x = document.getElementById("img");
      image_x.parentNode.removeChild(image_x);
      var image_x = document.getElementById("img");
      image_x.parentNode.removeChild(image_x);
    }
  }

  function placeBackUsa() {
    body.style = 'background-image: url("./images/backgrounds/Full\ Usa.png")';
    document.getElementById("usa-vancouver").style = 'display: block;';
    document.getElementById("usa-east-coast").style = 'display: block;';
    document.getElementById("place-back").style = 'display: none; font-size: 60px;';
    document.getElementById("east-nyc").style = 'display: none;';
    document.getElementById("west-resterant").style = 'display: none;';
    document.getElementById("west-house").style = "display: none;";
    document.getElementById("wedding").style = "display: none;";
    document.getElementById("rvyc").style = 'display: none;';
    document.getElementById("dimsum").style = 'display: none;';
    document.getElementById("granville").style = 'display: none;';
    document.getElementById("hotpot").style = 'display: none;';
    document.getElementById("museum").style = 'display: none;';
    document.getElementById("play").style = 'display: none;';
    document.getElementById("vhike").style = 'display: none;';
    document.getElementById("east-nyc").style = 'display: none;';
    document.getElementById("east-og").style = 'display: none;';
    document.getElementById("east-oldplace").style = 'display: none;';
    document.getElementById("east-newplace").style = 'display: none;';
    document.querySelector(".note").style = "display: block;";
  }
// -------x-----usa--------x-----


// -------------east coast------------------

function nyc() {
  body.style =
    'background-image: url("images/backgrounds/East Coast Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("east-nyc").style = 'display: none;';
  document.getElementById("east-og").style = 'display: none;';
  document.getElementById("east-oldplace").style = 'display: none;';
  document.getElementById("east-newplace").style = 'display: none;';
  document.getElementById("place-back-east").style = 'display: block; font-size: 60px;';
  document.getElementById("place-back").style = 'display: none; font-size: 60px;';
  var img = document.createElement('img');
    img.src = 'images/nyc/nyc0.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);

}

function og() {
  body.style =
    'background-image: url("images/backgrounds/East Coast Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("east-nyc").style = 'display: none;';
  document.getElementById("east-og").style = 'display: none;';
  document.getElementById("east-oldplace").style = 'display: none;';
  document.getElementById("east-newplace").style = 'display: none;';
  document.getElementById("place-back-east").style = 'display: block; font-size: 60px;';
  document.getElementById("place-back").style = 'display: none; font-size: 60px;';
  var img = document.createElement('img');
    img.src = 'images/og/og0.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og1.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og12.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og13.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og4.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og5.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og6.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og7.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og8.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og9.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og10.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og11.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og12.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og13.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og14.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og15.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og16.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og17.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og18.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og19.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og20.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og21.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og22.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og23.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/og/og24.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
}

function oldplace() {
  body.style =
    'background-image: url("images/backgrounds/East Coast Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("east-nyc").style = 'display: none;';
  document.getElementById("east-og").style = 'display: none;';
  document.getElementById("east-oldplace").style = 'display: none;';
  document.getElementById("east-newplace").style = 'display: none;';
  document.getElementById("place-back-east").style = 'display: block; font-size: 60px;';
  document.getElementById("place-back").style = 'display: none; font-size: 60px;';
  var img = document.createElement('img');
    img.src = 'images/old\ place/old0.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/old\ place/old1.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/old\ place/old2.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
}

function newplace() {
  body.style =
    'background-image: url("images/backgrounds/East Coast Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("east-nyc").style = 'display: none;';
  document.getElementById("east-og").style = 'display: none;';
  document.getElementById("east-oldplace").style = 'display: none;';
  document.getElementById("east-newplace").style = 'display: none;';
  document.getElementById("place-back-east").style = 'display: block; font-size: 60px;';
  document.getElementById("place-back").style = 'display: none; font-size: 60px;';
  for (let i = 0; i < 8; i++) {
    var img = document.createElement("img");
    img.src = `images/new\ place/new${i}.jpeg`;
    if (i%3==0) {
      img.id = "img1";
    }else{
      img.id = "img";
    }
    document.getElementById('body').appendChild(img);
  }
}

// -------x-----east coast----------x-------

// -------------west coast------------------
function dimsum() {
  body.style =
    'background-image: url("images/backgrounds/Vancouver Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("dimsum").style = "display: none;";
  document.getElementById("west-house").style = "display: none;";
  document.getElementById("granville").style = "display: none;";
  document.getElementById("hotpot").style = "display: none;";
  document.getElementById("museum").style = "display: none;";
  document.getElementById("play").style = "display: none;";
  document.getElementById("west-resterant").style = "display: none;";
  document.getElementById("rvyc").style = "display: none;";
  document.getElementById("vhike").style = "display: none;";
  document.getElementById("wedding").style = "display: none;";
  document.getElementById("place-back").style =
    "display: none; font-size: 60px;";
  document.getElementById("place-back-west").style =
    "display: block; font-size: 60px;";
  for (let i = 0; i < 1; i++) {
    var img = document.createElement("img");
    img.src = `images/dimsum/dimsum${i}.jpeg`;
    if (i % 3 == 0) {
      img.id = "img1";
    } else {
      img.id = "img";
    }
    document.getElementById("body").appendChild(img);
  }
}

function ghouse() {
  body.style =
    'background-image: url("images/backgrounds/Vancouver Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("dimsum").style = "display: none;";
  document.getElementById("west-house").style = "display: none;";
  document.getElementById("granville").style = "display: none;";
  document.getElementById("hotpot").style = "display: none;";
  document.getElementById("museum").style = "display: none;";
  document.getElementById("play").style = "display: none;";
  document.getElementById("west-resterant").style = "display: none;";
  document.getElementById("rvyc").style = "display: none;";
  document.getElementById("vhike").style = "display: none;";
  document.getElementById("wedding").style = "display: none;";
  document.getElementById("place-back").style =
    "display: none; font-size: 60px;";
  document.getElementById("place-back-west").style =
    "display: block; font-size: 60px;";
  for (let i = 0; i < 10; i++) {
    var img = document.createElement("img");
    img.src = `images/ghouse/ghouse${i}.jpeg`;
    if (i % 3 == 0) {
      img.id = "img1";
    } else {
      img.id = "img";
    }
    document.getElementById("body").appendChild(img);
  }
}

function granville() {
  body.style =
    'background-image: url("images/backgrounds/Vancouver Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("dimsum").style = "display: none;";
  document.getElementById("west-house").style = "display: none;";
  document.getElementById("granville").style = "display: none;";
  document.getElementById("hotpot").style = "display: none;";
  document.getElementById("museum").style = "display: none;";
  document.getElementById("play").style = "display: none;";
  document.getElementById("west-resterant").style = "display: none;";
  document.getElementById("rvyc").style = "display: none;";
  document.getElementById("vhike").style = "display: none;";
  document.getElementById("wedding").style = "display: none;";
  document.getElementById("place-back").style =
    "display: none; font-size: 60px;";
  document.getElementById("place-back-west").style =
    "display: block; font-size: 60px;";
  for (let i = 0; i < 2; i++) {
    var img = document.createElement("img");
    img.src = `images/granville/granville${i}.jpeg`;
    if (i % 3 == 0) {
      img.id = "img1";
    } else {
      img.id = "img";
    }
    document.getElementById("body").appendChild(img);
  }
}

function hotpot() {
  body.style =
    'background-image: url("images/backgrounds/Vancouver Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("dimsum").style = "display: none;";
  document.getElementById("west-house").style = "display: none;";
  document.getElementById("granville").style = "display: none;";
  document.getElementById("hotpot").style = "display: none;";
  document.getElementById("museum").style = "display: none;";
  document.getElementById("play").style = "display: none;";
  document.getElementById("west-resterant").style = "display: none;";
  document.getElementById("rvyc").style = "display: none;";
  document.getElementById("vhike").style = "display: none;";
  document.getElementById("wedding").style = "display: none;";
  document.getElementById("place-back").style =
    "display: none; font-size: 60px;";
  document.getElementById("place-back-west").style =
    "display: block; font-size: 60px;";
  for (let i = 0; i < 1; i++) {
    var img = document.createElement("img");
    img.src = `images/hotpot/hotpot${i}.jpeg`;
    if (i % 3 == 0) {
      img.id = "img1";
    } else {
      img.id = "img";
    }
    document.getElementById("body").appendChild(img);
  }
}

function museum() {
  body.style =
    'background-image: url("images/backgrounds/Vancouver Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("dimsum").style = "display: none;";
  document.getElementById("west-house").style = "display: none;";
  document.getElementById("granville").style = "display: none;";
  document.getElementById("hotpot").style = "display: none;";
  document.getElementById("museum").style = "display: none;";
  document.getElementById("play").style = "display: none;";
  document.getElementById("west-resterant").style = "display: none;";
  document.getElementById("rvyc").style = "display: none;";
  document.getElementById("vhike").style = "display: none;";
  document.getElementById("wedding").style = "display: none;";
  document.getElementById("place-back").style =
    "display: none; font-size: 60px;";
  document.getElementById("place-back-west").style =
    "display: block; font-size: 60px;";
  for (let i = 0; i < 2; i++) {
    var img = document.createElement("img");
    img.src = `images/museum/museum${i}.jpeg`;
    if (i % 3 == 0) {
      img.id = "img1";
    } else {
      img.id = "img";
    }
    document.getElementById("body").appendChild(img);
  }
}

function play() {
  body.style =
    'background-image: url("images/backgrounds/Vancouver Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("dimsum").style = "display: none;";
  document.getElementById("west-house").style = "display: none;";
  document.getElementById("granville").style = "display: none;";
  document.getElementById("hotpot").style = "display: none;";
  document.getElementById("museum").style = "display: none;";
  document.getElementById("play").style = "display: none;";
  document.getElementById("west-resterant").style = "display: none;";
  document.getElementById("rvyc").style = "display: none;";
  document.getElementById("vhike").style = "display: none;";
  document.getElementById("wedding").style = "display: none;";
  document.getElementById("place-back").style =
    "display: none; font-size: 60px;";
  document.getElementById("place-back-west").style =
    "display: block; font-size: 60px;";
  for (let i = 0; i < 2; i++) {
    var img = document.createElement("img");
    img.src = `images/play/play${i}.jpeg`;
    if (i % 3 == 0) {
      img.id = "img1";
    } else {
      img.id = "img";
    }
    document.getElementById("body").appendChild(img);
  }
}

function westrest() {
  body.style =
    'background-image: url("images/backgrounds/Vancouver Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("dimsum").style = "display: none;";
  document.getElementById("west-house").style = "display: none;";
  document.getElementById("granville").style = "display: none;";
  document.getElementById("hotpot").style = "display: none;";
  document.getElementById("museum").style = "display: none;";
  document.getElementById("play").style = "display: none;";
  document.getElementById("west-resterant").style = "display: none;";
  document.getElementById("rvyc").style = "display: none;";
  document.getElementById("vhike").style = "display: none;";
  document.getElementById("wedding").style = "display: none;";
  document.getElementById("place-back").style =
    "display: none; font-size: 60px;";
  document.getElementById("place-back-west").style =
    "display: block; font-size: 60px;";
  for (let i = 0; i < 9; i++) {
    var img = document.createElement("img");
    img.src = `images/resterant/resterant${i}.jpeg`;
    if (i % 3 == 0) {
      img.id = "img1";
    } else {
      img.id = "img";
    }
    document.getElementById("body").appendChild(img);
  }
}

function rvyc() {
  body.style =
    'background-image: url("images/backgrounds/Vancouver Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("dimsum").style = "display: none;";
  document.getElementById("west-house").style = "display: none;";
  document.getElementById("granville").style = "display: none;";
  document.getElementById("hotpot").style = "display: none;";
  document.getElementById("museum").style = "display: none;";
  document.getElementById("play").style = "display: none;";
  document.getElementById("west-resterant").style = "display: none;";
  document.getElementById("rvyc").style = "display: none;";
  document.getElementById("vhike").style = "display: none;";
  document.getElementById("wedding").style = "display: none;";
  document.getElementById("place-back").style =
    "display: none; font-size: 60px;";
  document.getElementById("place-back-west").style =
    "display: block; font-size: 60px;";
  for (let i = 0; i < 6; i++) {
    var img = document.createElement("img");
    img.src = `images/RVYC/rvyc${i}.jpeg`;
    if (i % 3 == 0) {
      img.id = "img1";
    } else {
      img.id = "img";
    }
    document.getElementById("body").appendChild(img);
  }
}

function vhike() {
  body.style =
    'background-image: url("images/backgrounds/Vancouver Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("dimsum").style = "display: none;";
  document.getElementById("west-house").style = "display: none;";
  document.getElementById("granville").style = "display: none;";
  document.getElementById("hotpot").style = "display: none;";
  document.getElementById("museum").style = "display: none;";
  document.getElementById("play").style = "display: none;";
  document.getElementById("west-resterant").style = "display: none;";
  document.getElementById("rvyc").style = "display: none;";
  document.getElementById("vhike").style = "display: none;";
  document.getElementById("wedding").style = "display: none;";
  document.getElementById("place-back").style =
    "display: none; font-size: 60px;";
  document.getElementById("place-back-west").style =
    "display: block; font-size: 60px;";
  for (let i = 0; i < 4; i++) {
    var img = document.createElement("img");
    img.src = `images/vhike/vhike${i}.jpeg`;
    if (i % 3 == 0) {
      img.id = "img1";
    } else {
      img.id = "img";
    }
    document.getElementById("body").appendChild(img);
  }
}

function wedding() {
  body.style =
    'background-image: url("images/backgrounds/Vancouver Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("dimsum").style = "display: none;";
  document.getElementById("west-house").style = "display: none;";
  document.getElementById("granville").style = "display: none;";
  document.getElementById("hotpot").style = "display: none;";
  document.getElementById("museum").style = "display: none;";
  document.getElementById("play").style = "display: none;";
  document.getElementById("west-resterant").style = "display: none;";
  document.getElementById("rvyc").style = "display: none;";
  document.getElementById("vhike").style = "display: none;";
  document.getElementById("wedding").style = "display: none;";
  document.getElementById("place-back").style =
    "display: none; font-size: 60px;";
  document.getElementById("place-back-west").style =
    "display: block; font-size: 60px;";
  for (let i = 0; i < 1; i++) {
    var img = document.createElement("img");
    img.src = `images/wedding/wedding${i}.jpeg`;
    if (i % 3 == 0) {
      img.id = "img1";
    } else {
      img.id = "img";
    }
    document.getElementById("body").appendChild(img);
  }
}

// -------x-----west coast----------x-------