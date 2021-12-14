const slothsimg = ["/img/sloth.png", 
"/img/sloth.png", 
"/img/sloth.png", 
"/img/sloth.png", 
"/img/sloth.png", 
"/img/sloth.png", 
"/img/sloth.png"];

// loop to make many sloths

slothsimg.forEach(slothimg => {

  const createImage = document.createElement('img');
  createImage.classList.add('imgOfSloth');
  const getSlothDiv = document.querySelector(".slothsDiv");
  createImage.src =slothimg;
  getSlothDiv.appendChild(createImage);


});

// Loop to make all sloths spin on hover. 

const spinnings = document.querySelectorAll(".imgOfSloth");

spinnings.forEach(spinning => {

  spinning.addEventListener("mouseover", function () {
     spinning.classList.add("spin");
})

});

