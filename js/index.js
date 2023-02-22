// MENU HAMBURGUESA
const $nav = document.getElementById("navegation")

document.getElementById("burger").addEventListener("click", () => {
    $nav.classList.toggle("nav-burger-v");
});

// ANIMACIONES

AOS.init({
    duration: 1000,
});

// VALIDADOR FORMULARIO

const $name = document.getElementById("name");
const $mensajeroName = document.getElementById("error-name")

$name.addEventListener("input", function (){

    const regex = /^[A-Za-zÑñÁáÉéÍiÓoÚúÜü\s]+$/g;
    
    if(regex.test(this.value)){
        $mensajeroName.innerHTML = "";
    }else{
        $mensajeroName.innerHTML = "No se permiten caracteres especiales y numeros";
    }
})

// VALIDAR CORREO

const $email = document.getElementById("email");
const $mensajeroEmail =  document.getElementById("error-email");

$email.addEventListener("input", function () {
    const regex = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

    if(regex.test(this.value)){
        $mensajeroEmail.innerHTML = "";
    }else{
        $mensajeroEmail.innerHTML = "Email invalido"
    }
});

