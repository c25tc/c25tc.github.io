// -------------usa--------------

function vancouver() {
    document.getElementById("body").style = 'background-image: url("./images/backgrounds/Vancouver.png")';
    document.getElementById("usa-vancouver").style = 'display: none;';
    document.getElementById("usa-east-coast").style = 'display: none;';
    document.getElementById("place-back").style = 'display: block; font-size: 60px;';
    document.getElementById("go-back").style = 'display: none;';
}

  function eastCoast() {
    document.getElementById("body").style = 'background-image: url("./images/backgrounds/East\ Coast.png"); background-color: rgb(43, 43, 43);';
    document.getElementById("usa-vancouver").style = 'display: none;';
    document.getElementById("usa-east-coast").style = 'display: none;';
    document.getElementById("place-back").style = 'display: block; font-size: 60px;';
    document.getElementById("east-nyc").style = 'display: block;';
    document.getElementById("east-og").style = 'display: block;';
    document.getElementById("east-oldplace").style = 'display: block;';
    document.getElementById("east-newplace").style = 'display: block;';
    document.getElementById("place-back-east").style = 'display: none; font-size: 60px;';
    document.getElementById("go-back").style = 'display: none;';
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
  }

  function placeBackUsa() {
    document.getElementById("body").style = 'background-image: url("./images/backgrounds/Full\ Usa.png")';
    document.getElementById("usa-vancouver").style = 'display: block;';
    document.getElementById("usa-east-coast").style = 'display: block;';
    document.getElementById("place-back").style = 'display: none; font-size: 60px;';
    document.getElementById("east-nyc").style = 'display: none;';
    document.getElementById("east-og").style = 'display: none;';
    document.getElementById("east-oldplace").style = 'display: none;';
    document.getElementById("east-newplace").style = 'display: none;';
    document.getElementById("go-back").style = 'display: block; font-size: 60px;';
  }
// -------x-----usa--------x-----


// -------------east coast------------------

function nyc() {
  document.getElementById("body").style = 'background-image: url("images/backgrounds/East Coast Dull.png"); background-color: rgb(12, 12, 12);';
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
  document.getElementById("body").style = 'background-image: url("images/backgrounds/East Coast Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("east-nyc").style = 'display: none;';
  document.getElementById("east-og").style = 'display: none;';
  document.getElementById("east-oldplace").style = 'display: none;';
  document.getElementById("east-newplace").style = 'display: none;';
  document.getElementById("place-back-east").style = 'display: block; font-size: 60px;';
  document.getElementById("place-back").style = 'display: none; font-size: 60px;';
  var img = document.createElement('img');
    // img.src = 'images/og/og0.jpeg';
    img.src = 'https://c25tc.github.io/images/Home%20Page%20Main.png';
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
  document.getElementById("body").style = 'background-image: url("images/backgrounds/East Coast Dull.png"); background-color: rgb(12, 12, 12);';
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
  document.getElementById("body").style = 'background-image: url("images/backgrounds/East Coast Dull.png"); background-color: rgb(12, 12, 12);';
  document.getElementById("east-nyc").style = 'display: none;';
  document.getElementById("east-og").style = 'display: none;';
  document.getElementById("east-oldplace").style = 'display: none;';
  document.getElementById("east-newplace").style = 'display: none;';
  document.getElementById("place-back-east").style = 'display: block; font-size: 60px;';
  document.getElementById("place-back").style = 'display: none; font-size: 60px;';
  var img = document.createElement('img');
    img.src = 'images/new\ place/new0.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/new\ place/new1.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/new\ place/new2.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/new\ place/new3.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/new\ place/new4.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/new\ place/new5.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/new\ place/new6.jpeg';
    img.id = 'img1';
    document.getElementById('body').appendChild(img);
    var img = document.createElement('img');
    img.src = 'images/new\ place/new7.jpeg';
    img.id = 'img';
    document.getElementById('body').appendChild(img);
}

// -------x-----east coast----------x-------