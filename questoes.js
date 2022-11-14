document.getElementById("buttonR1").addEventListener("click", function() {
    if (document.getElementById("opcaoa1").checked) {
    alert("Resposta Correta");
    
  }else{
    alert("Resposta errada");
  }
  });

document.getElementById("buttonR2").addEventListener("click", function() {
    if (document.getElementById("opcaoc2").checked) {
    alert("Resposta Correta");

  }else{
    alert("Resposta errada");
  }
  });

document.getElementById("buttonR3").addEventListener("click", function() {
    if (document.getElementById("opcaob3").checked) {
    alert("Resposta Correta");
    
  }else{
    alert("Resposta errada");
  }
  });

document.getElementById("buttonR").addEventListener("click", function() {

    window.location.href="index.html";
    
  });