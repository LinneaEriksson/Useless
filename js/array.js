const slothsimg = ["/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png"];

slothsimg.forEach(slothimg => {

  const hejsanhoppsan = document.createElement('img');
  hejsanhoppsan.classList.add('imgOfSloth');
  const hejsan = document.querySelector(".slothsDiv");
  hejsanhoppsan.src =slothimg;
  hejsan.appendChild(hejsanhoppsan);


});

// Loop för att få alla sloths att snurra on hoover. 

const spinnings = document.querySelectorAll(".imgOfSloth");

spinnings.forEach(spinning => {

  spinning.addEventListener("mouseover", function () {
     spinning.classList.add("spin");
})

});

