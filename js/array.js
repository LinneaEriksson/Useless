const slothsimg = ["/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png", "/img/sloth.png"];

slothsimg.forEach(slothimg => {

  const hejsanhoppsan = document.createElement('img');
  hejsanhoppsan.classList.add('imgOfSloth');
  const hejsan = document.querySelector(".slothsDiv");
  hejsanhoppsan.src =slothimg;
  hejsan.appendChild(hejsanhoppsan);

});
  
