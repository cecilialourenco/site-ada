document
  .getElementById("botaoEnviar")
  .addEventListener("click", validaFormulario);

function validaFormulario() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  if (nome != "" && email != "" && telefone != "") {
    alert("Prontinho! Você receberá as novidades por email.");
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}
