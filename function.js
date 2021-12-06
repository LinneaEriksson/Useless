const sloths = ["https://media.giphy.com/media/UtIv0Dp0ZhgQw/giphy.gif", 
"https://media.giphy.com/media/VTjMuV5o8r4eA/giphy.gif", 
"https://media.giphy.com/media/MXB7R8wBLfHz2/giphy.gif",
"https://media.giphy.com/media/12qRcaFWzF5yik/giphy.gif",
"https://media.giphy.com/media/QeVflwrx8cHzq/giphy.gif"];


function changeGif(){
  const random = Math.floor(Math.random() * sloths.length);
  const randomGif = (random, sloths[random]);
  document.getElementById("test").src = randomGif;
  }

  const buttonEat = document.querySelector('.sloth');

  buttonEat.addEventListener("click", function (e) {
    changeGif();
  });




  function howAboutNo(){
    document.getElementById("test").src = "https://media.giphy.com/media/O9BPkYr89lK2A/giphy.gif";
    }
  
    const noSloth = document.querySelector('.noSloth');
  
    noSloth.addEventListener("click", function (e) {
      howAboutNo();
    });