/* Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona,
in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare
le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone
(animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo
dinamico: generare in modo casuale un codice colore, sapendo che la notazione
esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi
tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente. */
const row = document.querySelector(".row");

estraIcona(icone);
function selected() {
    row.innerHTML = " ";
    const selezione = document.getElementById("Selezione");
    let selectedOption = selezione.value;
    if (selectedOption == "all") {
        estraIcona(icone);
    }
    console.log(selectedOption);

    const arraytipo = icone.filter(element => element.type === selectedOption);
    console.log(arraytipo);
    estraIcona(arraytipo);
};
function estraIcona(array) {
    for (let i = 0; i < array.length; i++) {
        const icon = array[i];
        createIcon(icon);
    }
}
function createIcon(icon) {
    const card = document.createElement('div');
    card.className = "col-2 text-center bg-white pt-4 m-4 rounded-3";
    card.innerHTML = `
	<div><i class="${icon.family} ${icon.prefix}${icon.name}" style="color:${icon.color}" "></i>
	<p>${icon.name}</p>
</div>
    `;
    row.appendChild(card);
}

