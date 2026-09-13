const formulario = document.querySelector(".login")

const email = document.querySelector("#iemail");
const senha = document.querySelector("#ipassword");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const usuario = {
        email: email.value,
        senha: senha.value
    };

    console.log(usuario)
});

mostrar.addEventListener("click", function() {

    const mostrar = document.querySelector("#mostrar");
    const imagemOlho = mostrar.querySelector("img");

    if (ipassword.type === "password") {
        ipassword.type = "text"

        imagemOlho.src = "../imgs/eye-on.png"
        imagemOlho.classList.replace("eye-off", "eye-on")
    } else {    
        ipassword.type = 'password'

        imagemOlho.src = "../imgs/eye-off.svg"
        imagemOlho.classList.replace("eye-on", "eye-off")
    }
})