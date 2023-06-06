const button = document.getElementById("degrad-btn");

button.addEventListener("click", () => {
  console.log("Botão clicado!");
});





/*modal*/


  const button = document.getElementById("degrad-btn");

  button.addEventListener("click", () => {
    $('#instrucoesModal').modal('show');
  });



  /*relatório*/ 

  // Após o usuário fazer login
// Supondo que você tenha o email do usuário armazenado na variável "emailUsuarioLogado"
if (emailUsuarioLogado === 'admin@doardigital.com') {
  $('#relatorio-action').show(); // Mostra o item de menu "Relatório"
} else {
  $('#relatorio-action').hide(); // Oculta o item de menu "Relatório"
}



if (emailUsuarioLogado === 'admin@doardigital.com') {
  $('.menu-quero-doar').remove(); // Remove o item de menu "Quero doar"
  $('.menu-minhas-doacoes').remove(); // Remove o item de menu "Minhas doações"
}








  