var nome;
var diasDeFoco;
var rank;
var fitCoins;
var rankNutricional;
var competidoresAtendidos;
var fotoPerfil;

class Competidor{
    constructor(nome,diasDeFoco,rank,fitCoins,fotoPerfil){
        this.nome = nome;
        this.diasDeFoco = diasDeFoco;
        this.rank = rank;
        this.fitCoins = fitCoins;
        this.fotoPerfil = fotoPerfil;
    }
}

class Nutricionista{
    constructor(nome,rankNutricional,competidoresAtendidos,fotoPerfil){
        this.nome = nome;
        this.rankNutricional = rankNutricional;
        this.competidoresAtendidos = competidoresAtendidos;
        this.fotoPerfil = fotoPerfil;
    }
}