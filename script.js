//háttér váltása
const kepek = [
    "hegedukotta2.jpg",
    "gitarok.jpg", 
    "zongorazas.jpg",  
    "zenekucko.jpg",
    "kottakep.jpg"
];

let hatterIndex = 0; 
document.getElementById("hatterGomb").addEventListener("click", function() {
    const testElem = document.body;

    if (hatterIndex < kepek.length) {
        testElem.style.backgroundImage = `url('${kepek[hatterIndex]}')`;
        hatterIndex++;
    } else {
        testElem.style.backgroundImage = "none";
        hatterIndex = 0;
    }
});



//mozgó felirat
const szoveg = ['Z E N E', 'D A L L A M O K', 'H A N G O K', 'S Z E R E T E T', 'H A R M Ó N I A'];
const FrissitesiIdo = 2000; 
let index = 0;
function SzovegGorgeto() {
    const megjelenito = document.getElementById("megjelenito");
    megjelenito.textContent = szoveg[index];
    index = (index + 1) % szoveg.length;
    setTimeout(SzovegGorgeto, FrissitesiIdo); 
}
window.onload = SzovegGorgeto;





//random idézetek
const idezetek = [
    "„A zene a lélek tápláléka.” – Ludwig van Beethoven",
    "„A zene az érzelem művészete.” – Oscar Wilde",
    "„Az élet zene nélkül egy tévedés.” – Friedrich Nietzsche",
    "„A zene az a nyelv, amely mindenkihez szól.” – Stevie Wonder",
    "„A jó zene költészet, amit hallani lehet.” – Ed Sheeran"
];

function veletlenIdezet() {
    const veletlenIndex = Math.floor(Math.random() * idezetek.length);
    document.getElementById("idezet").innerText = idezetek[veletlenIndex];
}












