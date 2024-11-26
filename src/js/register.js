document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("user").value;
  const senha = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  const usuarioObj = { usuario, email, senha };

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push(usuarioObj);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  const modal = document.getElementById("before");
  const progressBar = document.getElementById("progress-bar");
  modal.classList.remove("hidden");

  // Animação de carregamento
  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      window.location.href = "login.html"; // Redireciona para a tela de login
    }
  }, 20); // Incremento de 1% a cada 20ms

  // Limpar o formulário
  document.querySelector("form").reset();
});
