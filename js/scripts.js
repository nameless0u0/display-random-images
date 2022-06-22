function getRandomCatImage(){
    var randomCatsImages = new Array();

    randomCatsImages[0] = "https://i.ibb.co/nkTZNF4/cat-1.jpg";
    randomCatsImages[1] = "https://i.ibb.co/19rdgTJ/cat-2.jpg";
    randomCatsImages[2] = "https://i.ibb.co/NCcFqqR/cat-3.jpg";
    randomCatsImages[3] = "https://i.ibb.co/BgYbTd3/cat-4.jpg";
    randomCatsImages[4] = "https://i.ibb.co/VgWTPV2/cat-5.jpg";
    randomCatsImages[5] = "https://i.ibb.co/R2TTQP7/cat-6.jpg";
    randomCatsImages[6] = "https://i.ibb.co/mX81hfP/cat-7.jpg";

    var n = Math.floor(Math.random() * randomCatsImages.length);

    return document.getElementById("result").innerHTML = `<img width="600" height="400" src="${randomCatsImages[n]}"/>`
}

function getRandomDogImage() {
  var randomDogsImages = new Array();

  randomDogsImages[0] = "https://i.ibb.co/1JCRh2D/dog-1.jpg";
  randomDogsImages[1] = "https://i.ibb.co/GCbWqNq/dog-2.jpg";
  randomDogsImages[2] = "https://i.ibb.co/mHxKz9T/dog-3.jpg";
  randomDogsImages[3] = "https://i.ibb.co/7bgmCW1/dog-4.jpg";
  randomDogsImages[4] = "https://i.ibb.co/hKwY0KS/dog-5.jpg";
  randomDogsImages[5] = "https://i.ibb.co/YL3kNXn/dog-6.jpg";
  randomDogsImages[6] = "https://i.ibb.co/HTsJnbY/dog-7.jpg";

  var m = Math.floor(Math.random() * randomDogsImages.length);

  return document.getElementById("result").innerHTML = `<img width="600" height="400" src="${randomDogsImages[m]}"/>`

}
