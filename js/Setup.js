//Feed
const $enviarInput = document.getElementById("enviarInput");
const $bolinhasMenuFeed = document.getElementById("bolinhasMenu");
const $bonecaMenuFeed = document.getElementById("bonecaMenu");
//Perfil
const $bolinhasMenuPerfil = document.getElementById("bolinhasMenuPerfil");
const $bonecaMenuPerfil = document.getElementById("bonecaMenuPerfil");

/*
*  Menus
*/

const $login = document.getElementById("Login");
const $feed = document.getElementById("Feed");
const $perfil = document.getElementById("Perfil");

/*
* Variáveis globais
*/

var clicouCamera = false;

/*
*  Display's
*/

$feed.style.display = "none";
$perfil.style.display = "none";

$enviarInput.addEventListener("click", () => {
    $login.style.display = "none";
    $feed.style.display = "block";

    document.getElementById("camera").addEventListener("click", () => {
        clicouCamera = true;
        if(clicouCamera){
            let $botaoEnviarFeed = document.getElementById("enviarInputFeed").style;
            $botaoEnviarFeed.backgroundColor = "#6ab002"
            $botaoEnviarFeed.borderColor = "#6ab002";
        }
    });
    
});

//Feed
$bolinhasMenuFeed.addEventListener("click", () => {
    $feed.style.display = "block";
    $perfil.style.display = "none";
});

$bonecaMenuFeed.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "block";
});

//Perfil
$bolinhasMenuPerfil.addEventListener("click", () => {
    $feed.style.display = "block";
    $perfil.style.display = "none";
});

$bonecaMenuPerfil.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "block";
});
