var palabras = ["¡Pruébalo aquí!", "¡Sorpréndeme!", "¿Es cierto? Presiona aquí", "Dijuja y pruébamelo", "Te desafío aquí"];
var elEncabezado = document.querySelector("header");
var elColor, monsterInc;


function preload() {
    monsterInc = loadJSON("https://raw.githubusercontent.com/jacintasanchez/prueba-1/de24ccc3cedb748e052810254beaa78d887468ca/datos.json");
}

function setup() {

    var lasOpciones = [];
    Object.values(monsterInc).forEach((p) => {
            lasOpciones.push(p.img)
    });
    console.log(lasOpciones);
    createImg(random(lasOpciones), 'holi').addClass('chiqui');

    var p = random(palabras);
    console.log(p);
    createA("page.html", p).parent("next");
    noCanvas();
}




/*
var elEncabezado = document.querySelector("header");
var elColor, monsterInc;

function preload() {
    monsterInc = loadJSON("https://raw.githubusercontent.com/jacintasanchez/prueba-1/main/datos.json");
}

function setup() {
    var lasOpciones = [];
    Object.values(monsterInc).forEach((x) => {
     if((x.level == "In Training")) {
        lasOpciones.push(x.img)
      }});
    console.log(lasOpciones);

    var descarga = select("#descarga");
    descarga.mousePressed(artemania);

    var descarga = select("#borra");
    descarga.mousePressed(borrador);
    createElement("h1", "Dibuja este personaje de Monster Inc").parent(elEncabezado).id("title");
    createImg(random(lasOpciones),"...").addClass("bwaby");
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background("#ffffff");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
}

function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function artemania() {
    saveCanvas("mi_minion", "jpg");
}

function borrador() {
    background("#ffffff");
}
*/


