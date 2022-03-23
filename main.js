// ` ` ${}
const row = document.querySelector(".row");
estraIcona(icone);
function selected() {
    const selezione = document.getElementById("Selezione");
    let selectedOption = selezione.value;
    console.log(selectedOption);
    row.innerHTML = " ";
    const arraytipo = icone.filter(element => element.type === selectedOption);
    console.log(arraytipo);
    estraIcona(arraytipo)
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
	<div><i class="${icon.family} ${icon.prefix}${icon.name} c-${icon.color}"></i>
	<p>${icon.name}</p>
</div>
    `;
    row.appendChild(card);
}
