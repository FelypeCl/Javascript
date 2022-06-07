//Feed
const $enviarInput = document.getElementById("enviarInput");
const $bolinhasMenuFeed = document.getElementById("bolinhasMenu");
const $bonecaMenuFeed = document.getElementById("bonecaMenu");
const $bauMenu = document.getElementById("bauMenu");
const $escudoMenu = document.getElementById("escudoMenu");

//Perfil
const $ldPerfilMenu = document.getElementById("ldPerfilMenu");
const $menuPerfil = document.getElementById("menuPerfil");
const $bolinhasMenuPerfil = document.getElementById("bolinhasMenuPerfil");
const $bonecaMenuPerfil = document.getElementById("bonecaMenuPerfil");
const $escudoMenuPerfil = document.getElementById("escudoMenuPerfil");
const $bauMenuPerfil = document.getElementById("bauMenuPerfil");
const $conquistas = document.getElementById("conquistas");
const $conquistaTexto = document.getElementById("conquistaTexto");
const $sobreTexto = document.getElementById("sobreTexto");
const $ldPerfilConquitasMenuVerde = document.getElementById("ldPerfilConquitasMenuVerde");
const $sobre = document.getElementById("sobre");

//Ligas
const $bolinhasLigas = document.getElementById("bolinhasLigas");
const $bonecaLigas = document.getElementById("bonecaLigas");
const $bauLigas = document.getElementById("bauLigas");

//DuoFit
const $bolinhasDuoFit = document.getElementById("bolinhasDuoFit");
const $bonecaDuoFit = document.getElementById("bonecaDuoFit");
const $escudoDuoFit = document.getElementById("escudoDuoFit");

//Historico
const $bolinhasHistorico = document.getElementById("bolinhasHistorico");
const $bonecaHistorico = document.getElementById("bonecaHistorico");
const $escudoHistorico = document.getElementById("escudoHistorico");
const $bauHistorico = document.getElementById("bauHistorico");

/*
*  Menus
*/

const $login = document.getElementById("Login");
const $feed = document.getElementById("Feed");
const $perfil = document.getElementById("Perfil");
const $Ligas = document.getElementById("Ligas");
const $duoFit = document.getElementById("duoFit");
const $Historico = document.getElementById("Historico");

/*
* Variáveis globais
*/

var clicouCamera = false;

/*
*  Display's
*/

$feed.style.display = "none";
$perfil.style.display = "none";
$Ligas.style.display = "none";
$duoFit.style.display = "none";
$Historico.style.display = "none";

$enviarInput.addEventListener("click", () => {
    $login.style.display = "none";
    $feed.style.display = "block";

    let $botaoEnviarFeed = document.getElementById("enviarInputFeed");

    document.getElementById("camera").addEventListener("click", () => {
        clicouCamera = true;
        if(clicouCamera){
            $botaoEnviarFeed.style.backgroundColor = "#6ab002"
            $botaoEnviarFeed.style.borderColor = "#6ab002";
        }

    });

    $botaoEnviarFeed.addEventListener("click", () => {
        let $refeiCao1 = document.getElementById("refeicao1");
        let $refeicaoFeedBack = document.getElementById("refeicaoFeedBack");
        $refeiCao1.style.display = "block";
        $refeicaoFeedBack.style.display = "none";

        if(clicouCamera){
            $Historico.style.display = "block";
            $feed.style.display = "none";

            $refeiCao1.addEventListener("click", () => {
                $refeiCao1.style.display = "none";
                $refeicaoFeedBack.style.display = "block";
            })
        }
    })
    
});

//Feed
$bolinhasMenuFeed.addEventListener("click", () => {
    $feed.style.display = "block";
    $perfil.style.display = "none";
    $Ligas.style.display = "none";
    $duoFit.style.display = "none";
});

$bonecaMenuFeed.addEventListener("click", () => {
    $feed.style.display = "none";
    $sobre.style.display = "none";
    $perfil.style.display = "block";
    $duoFit.style.display = "none";
});

$escudoMenu.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "none";
    $Ligas.style.display = "block";
    $duoFit.style.display = "none";
});

$bauMenu.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "none";
    $Ligas.style.display = "none";
    $duoFit.style.display = "block";
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

$escudoMenuPerfil.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "none";
    $Ligas.style.display = "block";
});

$bauMenuPerfil.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "none";
    $Ligas.style.display = "none";
    $duoFit.style.display = "block"
});

$sobreTexto.addEventListener("click", () => {
    $conquistas.style.display = "none";
    $sobre.style.display = "block";
    $conquistaTexto.style.color = "#939393";
    $sobreTexto.style.color = "#79c10d";
    $ldPerfilConquitasMenuVerde.style.left = "180px";
    $menuPerfil.style.top = "-180px";
    $ldPerfilMenu.style.top = "-185px";

});

$conquistaTexto.addEventListener("click", () => {
    $conquistas.style.display = "block";
    $sobre.style.display = "none";
    $conquistaTexto.style.color = "#79c10d";
    $sobreTexto.style.color = "#939393";
    $ldPerfilConquitasMenuVerde.style.left = "0px";
    $menuPerfil.style.top = "-395px";
    $ldPerfilMenu.style.top = "-400px";
});

//Ligas
$bolinhasLigas.addEventListener("click", () => {
    $feed.style.display = "block";
    $perfil.style.display = "none";
    $Ligas.style.display = "none";
});

$bonecaLigas.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "block";
    $Ligas.style.display = "none";
    $sobre.style.display = "none";
});

$bauLigas.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "none";
    $Ligas.style.display = "none";
    $sobre.style.display = "none";
    $duoFit.style.display = "block";
});

//DuoFit
$bolinhasDuoFit.addEventListener("click", () => {
    $feed.style.display = "block";
    $perfil.style.display = "none";
    $Ligas.style.display = "none";
    $duoFit.style.display = "none";
});

$bonecaDuoFit.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "block";
    $Ligas.style.display = "none";
    $sobre.style.display = "none";
    $duoFit.style.display = "none";
});

$escudoDuoFit.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "none";
    $Ligas.style.display = "block";
    $sobre.style.display = "none";
    $duoFit.style.display = "none";
});

//Historico

$bolinhasHistorico.addEventListener("click", () => {
    $feed.style.display = "block";
    $perfil.style.display = "none";
    $Ligas.style.display = "none";
    $duoFit.style.display = "none";
    $Historico.style.display = "none";
});

$bonecaHistorico.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "block";
    $Ligas.style.display = "none";
    $sobre.style.display = "none";
    $duoFit.style.display = "none";
    $Historico.style.display = "none";
});

$escudoHistorico.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "none";
    $Ligas.style.display = "block";
    $sobre.style.display = "none";
    $duoFit.style.display = "none";
    $Historico.style.display = "none";
});

$bauHistorico.addEventListener("click", () => {
    $feed.style.display = "none";
    $perfil.style.display = "none";
    $Ligas.style.display = "block";
    $sobre.style.display = "none";
    $duoFit.style.display = "none";
    $Historico.style.display = "none";
});