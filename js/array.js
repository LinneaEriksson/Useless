const slothsimg = ["/img/sloth.png", 
"/img/sloth.png", 
"/img/sloth.png", 
"/img/sloth.png", 
"/img/sloth.png", 
"/img/sloth.png", 
"/img/sloth.png"];

// loop fö

slothsimg.forEach(slothimg => {

  const createImage = document.createElement('img');
  createImage.classList.add('imgOfSloth');
  const hejsan = document.querySelector(".slothsDiv");
  createImage.src =slothimg;
  hejsan.appendChild(createImage);


});

// Loop to make all sloths spin on hover. 

const spinnings = document.querySelectorAll(".imgOfSloth");

spinnings.forEach(spinning => {

  spinning.addEventListener("mouseover", function () {
     spinning.classList.add("spin");
})

});

