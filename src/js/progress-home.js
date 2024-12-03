// Obtendo referência ao botão corretamente
const btnLogin = document.getElementById("btn-login");

// Adicionando evento ao botão
btnLogin.addEventListener("click", (event) => {
  event.preventDefault(); // Previne o comportamento padrão do link (navegação imediata)

  // Referências aos elementos
  const modal = document.getElementById("before-login");
  const progressBar = document.getElementById("progress-bar");

  // Exibindo o modal
  modal.classList.remove("hidden");

  // Animação de carregamento
  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      window.location.href = "login.html"; // Redireciona para a página de login
    }
  }, 20); // Incremento de 1% a cada 20ms
});

// Seleciona todos os elementos com a classe "btn-register"
const btnRegisterElements = document.querySelectorAll(".btn-register");

btnRegisterElements.forEach((btnRegister) => {
  btnRegister.addEventListener("click", (event) => {
    event.preventDefault();

    // Referências aos elementos
    const modal = document.getElementById("before-register");
    const progressBar = document.getElementById("progress-bar-register");

    // Exibindo o modal
    modal.classList.remove("hidden");

    // Animação de carregamento
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      progressBar.style.width = progress + "%";

      if (progress >= 100) {
        clearInterval(interval);
        window.location.href = "register.html"; // Redireciona para a página de registro
      }
    }, 20); // Incremento de 1% a cada 20ms
  });
});



