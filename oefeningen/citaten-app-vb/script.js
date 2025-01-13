// h1 aanpassen
document.querySelector('h1').innerText = 'Inspirerende citaten';

// eerste citaat toevoegen
const citaattitel1 = 'To be';
const citaattekst1 = "To be or not to be, that's the question";
const citaatauteur1 = 'William Shakespeare';
const citaattaal1 = "en";
const artikel = document.createElement('article');
artikel.innerHTML = `<h2>${citaattitel1}</h2> <p>${citaattekst1}</p> <p class="auteur">${citaatauteur1}</p>`;
artikel.classList.add(`${citaattaal1}`);
/*console.log(artikel); --> laat zien of het artikel wordt aangemaakt*/
document.querySelector('section.citaten').appendChild(artikel);

// element  verwijderen
document.getElementById('geencitaten').remove();

//nieuw citaat toevoegen
const citaattitel2 = 'Vandaag';
const citaattekst2 = "Wat je vandaag moet doen, moet je doen zoal je morgen denkt dat je had moeten doen.";
const citaatauteur2 = 'Toom Hermans';
const citaattaal2 = "nl";
const artikel2 = document.createElement('article');
artikel2.innerHTML = `<h2>${citaattitel2}</h2> <p>${citaattekst2}</p> <p class="auteur">${citaatauteur2}</p>`;
artikel2.classList.add(`${citaattaal2}`);
document.querySelector('section.citaten').appendChild(artikel2);


//Oplossing voor citaten toe te voegen
function voegCitaatToe(titel, tekst, auteur, taal) {
    const citaatArtikel = document.createElement('article');
    citaatArtikel.innerHTML = `<h2>${titel}</h2> <p>${tekst}</p> <p class="auteur">${auteur}</p>`;
    citaatArtikel.classList.add(`${taal}`);
    document.querySelector('section.citaten').appendChild(citaatArtikel);
}

voegCitaatToe('Penser', 'Je panse, donc je suis.', 'René Descartes', 'fr');

//footer toevoegen
/* 
const footer = document.createElement('footer');
footer.innerHTML = '<p>&copy; 2025 - Lana Maes</p>'
document.body.insertAdjacentHTML('beforeend', footer); */

document.body.insertAdjacentHTML('beforeend', '<footer><p>&copy; 2025 - Lana Maes</p></footer>')