function btnFun() { 
  let x = parseInt(Math.random() * 300);
  let y = parseInt(Math.random() * 600);

   document.getElementById("btnNao").style.top=y+"px"
   document.getElementById("btnNao").style.left=x+"px"
}

function btnFunSim() { 
  document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/c7/a2/c1/c7a2c1a21a098aecae41de9ba425130a.jpg')";
  
  alert("Voce deixou dois Goldes felizes, te amo minha paçoquinha!!");
  
  let audo = document.getElementById("MyAudio");
  audo.play();
}