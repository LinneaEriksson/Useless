const slothsimg = ["/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png"];

slothsimg.forEach(slothimg => {

  const createImage = document.createElement('img');
  createImage.classList.add('imgOfSloth');
  const hejsan = document.querySelector(".slothsDiv");
  createImage.src =slothimg;
  hejsan.appendChild(createImage);


});

// Loop för att få alla sloths att snurra on hoover. 

const spinnings = document.querySelectorAll(".imgOfSloth");

spinnings.forEach(spinning => {

  spinning.addEventListener("mouseover", function () {
     spinning.classList.add("spin");
})

});

