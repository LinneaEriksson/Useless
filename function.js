const sloths = ["https://media.giphy.com/media/UtIv0Dp0ZhgQw/giphy.gif", 
"https://media.giphy.com/media/VTjMuV5o8r4eA/giphy.gif", 
"https://media.giphy.com/media/MXB7R8wBLfHz2/giphy.gif",
"https://media.giphy.com/media/12qRcaFWzF5yik/giphy.gif",
"https://media.giphy.com/media/QeVflwrx8cHzq/giphy.gif"];


// Function that randomizes a gif. 

function changeGif(){
  const random = Math.floor(Math.random() * sloths.length);
  const randomGif = (random, sloths[random]);
  document.getElementById("gif").src = randomGif;
  }

  const buttonEat = document.querySelector('.sloth');

  buttonEat.addEventListener("click", function (e) {
    changeGif();
  });

// Function that changes gif to How about no gif. 

  function howAboutNo(){
    document.getElementById("gif").src = "https://media.giphy.com/media/O9BPkYr89lK2A/giphy.gif";
    }
  
    const noSloth = document.querySelector('.noSloth');
  
    noSloth.addEventListener("click", function (e) {
      howAboutNo();
    });

      