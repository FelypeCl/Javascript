const $enviarInput = document.getElementById("enviarInput");
const $bolinhasMenu = document.getElementById("bolinhasMenu");
const $bonecaMenu = document.getElementById("bonecaMenu");

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

$bolinhasMenu.addEventListener("click", () => {
    $feed.style.display = "block";
    $perfil.style.display = "none";
});

$bonecaMenu.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "block";
});
