const slothsimg = ["/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png"];

slothsimg.forEach(slothimg => {

  const hejsanhoppsan = document.createElement('img');
  hejsanhoppsan.classList.add('imgOfSloth');
  const hejsan = document.querySelector(".slothsDiv");
  hejsanhoppsan.src =slothimg;
  hejsan.appendChild(hejsanhoppsan);


});

// BEHÖVER VARA I EN LOOP FÖR ATT FUNKA PÅ ALLA, HUR?!?!?!!?!?

document.querySelectorAll(".imgOfSloth").addEventListener("mouseover", function () {
  const spinnings = document.querySelector(".imgOfSloth");
  spinnings.classList.add("spin");
  
});