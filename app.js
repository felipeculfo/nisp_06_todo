const przycisk = document.getElementById('mojPrzycisk');
const input = document.getElementById('mojePole');
const lista = document.getElementById('mojaLista');

przycisk.addEventListener('click', function() {
    const tekst = input.value;

    if (tekst.trim() !== "") {
        // 1. Tworzymy element li
        const nowyElement = document.createElement('li');
        
        // 2. Tworzymy checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // 3. Dodajemy zdarzenie do checkboxa
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                nowyElement.classList.add('checked');
            } else {
                nowyElement.classList.remove('checked');
            }
        });

        // 4. Składamy element w całość
        nowyElement.appendChild(checkbox); // Najpierw checkbox
        nowyElement.appendChild(document.createTextNode(tekst)); // Potem tekst
        
        lista.appendChild(nowyElement);

        input.value = "";
        input.focus();
    }
});