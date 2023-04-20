let LISTA = [];

$(function () {
    let vegpont = "adatok.json"
    console.log("betöltés után ", LISTA);
    adatbeolvas(vegpont, LISTA, megjelenit);

    vegpont = " https://pokeapi.co/api/v2/pokemon/ditto"
    adatbeolvas(vegpont, LISTA, megjelenit);


});


function adatbeolvas(vegpont, lista, callbackFv) {

    fetch(vegpont)
        .then((response) => response.json())
        .then((data) => {
            lista = data;
            callbackFv(lista);
        })
        .catch((error) => console.log(error));


}

function megjelenit(lista) {

    console.log(lista);
    const pokemon = {
        kep: lista.sprites.front_default,
        neve: lista.name
    }
    const kiiro = $(".pokemon");
    let megjelenit = `<h1>${pokemon.neve}</h1>
    <img src="${pokemon.kep}" width="110px">`;
    kiiro.html(megjelenit)



}