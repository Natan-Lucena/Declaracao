function btnFun() { 
  let x = parseInt(Math.random() * 300);
  let y = parseInt(Math.random() * 600);

   document.getElementById("btnNao").style.top=y+"px"
   document.getElementById("btnNao").style.left=x+"px"
}

function btnFunSim() { 
  //Alertzinho
  alert("Voce me faz a pessoa mais feliz do mundo, eu te amo!!!");
  //Definindo o background e aumentando o tamanho
  document.body.style.backgroundImage = "url('https://i.imgur.com/lYxIY4b.jpg')";
  document.body.style.backgroundSize = "170%";
  //definindo a musga e tocando
  let audo = document.getElementById("MyAudio");
  audo.play();
  //Fazendo os botões e o titulo sumirem
  document.getElementById("btnSim").style.display = "none";
  document.getElementById("btnNao").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("segundoTexto").style.display = "block";
}