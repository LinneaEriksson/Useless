const sloths = ["https://media.giphy.com/media/UtIv0Dp0ZhgQw/giphy.gif", 
"https://media.giphy.com/media/VTjMuV5o8r4eA/giphy.gif", 
"https://media.giphy.com/media/MXB7R8wBLfHz2/giphy.gif",
"https://media.giphy.com/media/12qRcaFWzF5yik/giphy.gif",
"https://media.giphy.com/media/QeVflwrx8cHzq/giphy.gif",
"https://media.giphy.com/media/uot717nm9aLTO/giphy.gif",
"https://media.giphy.com/media/t8ftut6HiWEPm/giphy.gif",
"https://media.giphy.com/media/7hzoHpbXXhqmY/giphy.gif",
"https://media.giphy.com/media/slKY98OIDwFJ6/giphy.gif",
"https://media.giphy.com/media/G450NfEHoUo7e/giphy.gif",
"https://media.giphy.com/media/QfmRynMcJiiHe/giphy.gif",
"https://media.giphy.com/media/jt2ssP0zeoskzVjf4e/giphy.gif",
"https://media.giphy.com/media/xNrM4cGJ8u3ao/giphy.gif",
];


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


    // function to change the backgroundcolor when you scroll down. 

    function changeBackground(){

      // console.log(document.body.getBoundingClientRect()) 

      if (window.scrollY > window.innerHeight/2){
        document.body.classList.add('backgroundColor');
      }else {
        document.body.classList.remove('backgroundColor');
      }
    }
    window.addEventListener('scroll', changeBackground);








  