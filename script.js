const button = document.getElementById("degrad-btn");

button.addEventListener("click", () => {
  console.log("Botão clicado!");
});

/*login */

$("#form-login").submit(async function(e) {
  e.preventDefault();
  const previousSubmitHTML = $('#btn-login').html();
  $('#btn-login').html("<i class='fas fa-spinner fa-spin'></i> Validando...");
  await login();
  $('#btn-login').html(previousSubmitHTML);
});

async function login() {
  const data = {
      acesso: document.getElementById("email").value,
      senha: document.getElementById("password").value,
  };

  try {
      const response = await fetch(apiURL + "/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });

      if (response.status == 401) {
          alert('Dados de acesso inválidos');
          return;
      }

      const responseData = await response.json();
      console.log(responseData);
      localStorage.userData = JSON.stringify(responseData);

      alert('Login realizado com sucesso.');

      window.location.href = 'index.html';
  } catch (e) {
      console.log(e);
      alert('Um erro ocorreu. Verifique as informações e tente novamente');
  }
}

/*perfil no menu*/
$(document).ready(function() {
  user = JSON.parse(localStorage.userData || '{}');
  console.log(user);
  if (jQuery.isEmptyObject(user)) {
      $('.menu-unauthenticated').show();
      $('.menu-authenticated').hide();
  } else {
      $('.menu-unauthenticated').hide();
      $('.menu-authenticated').show();

      const actionContent = $('#profile-action a').html();
      $('#profile-action a').html(actionContent.replace('[Nome]', user.nome));
  }
});

$('#logout-action').click(function() {
  localStorage.clear();
  location.reload();
});

/*tela de cadastro*/

$("#form-cadastro").submit(async function(e) {
  e.preventDefault();
  if (!validateForm()) return;

  const previousSubmitHTML = $('#btn-login').html();
  $('#btn-login').html("<i class='fas fa-spinner fa-spin'></i> Validando...");
  await cadastraUsuario();
  $('#btn-login').html(previousSubmitHTML);
});

function checkPasswordMatch() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var passwordMatchElement = document.getElementById("password-match");
  
  if (password === confirmPassword) {
      passwordMatchElement.style.display = "none";
  } else {
      passwordMatchElement.style.display = "block";
  }
}

function validateForm() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  
  if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return false;
  }
  
  return true;
}


async function cadastraUsuario() {
  const data = {
      nome: document.getElementById("name").value,
      email: document.getElementById("email").value,
      senha: document.getElementById("password").value,
      telefone: document.getElementById("phone").value,
  };

  try {
      const response = await fetch(apiURL + "/usuario", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });

      alert('Usuário criado. Agora prossiga com o login');

      window.location.href = 'login.html';
  } catch (e) {
      console.log(e);
      alert('Um erro ocorreu. Verifique as informações e tente novamente');
  }
}
$(document).ready(function () {
  $('#phone').mask('(00) 00000-0000');
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








  