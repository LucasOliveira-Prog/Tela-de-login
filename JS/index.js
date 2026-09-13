const formulario = document.querySelector(".login");

const email = document.querySelector("#iemail");
const senha = document.querySelector("#ipassword");

const mostrar = document.querySelector("#mostrar");
const imagemOlho = mostrar.querySelector("img");


formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const usuario = {
        email: email.value,
        senha: senha.value
    };
    console.log(usuario);
});


mostrar.addEventListener("click", function() {

    if (senha.type === "password") {
        senha.type = "text";

        imagemOlho.src = "imgs/eye-on.png";
        imagemOlho.classList.replace("eye-off", "eye-on");
    } else {
        senha.type = "password";

        imagemOlho.src = "imgs/eye-off.svg";
        imagemOlho.classList.replace("eye-on", "eye-off");
    }
});