//typeof(document)
// Hiermee kan je kijken welk type document je aan het bewerken bent.

addStatus("Hallo!");
addStatus("Dit is een test!");

const animal = {name: "Jibbe", type: "hond", age: 10}
// const aanpassen:
//animal.naam = "Taavi"
// output: {naam: Taavi, type: "hond", age: 10}

addStatus(`Name: ${animal.name} - Type: ${animal.type} - Age: ${animal.age}`);


//Uilijnen bij oude html manier
function lijnUit() {
    document.querySelector("#alineUitlijning").classList.toggle("tekst-rechts");
  }


