document.getElementById("Comecar").addEventListener("click", validar)
  
 function validar () {
  if (document.getElementById("nome").value != "") {
    alert("Vamos começar a trivia, " + document.getElementById("nome").value)

    window.location.href="questoes.html"
    
  }else{
    alert("Por favor, digite seu nome para iniciar!")
  }

}
