document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const user = document.getElementById("user").value;
  const senha = document.getElementById("senha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  console.log("Usuários registrados:", usuarios); // Depuração
  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.usuario === user && usuario.senha === senha
  );


  if (usuarioEncontrado) {
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
        window.location.href = "home.html"; // Redireciona para home.html
      }
    }, 20); // Incremento de 1% a cada 20ms

    } else {
      alert("Falha no login. Verifique suas credenciais.");
    }

  document.querySelector("form").reset();
});