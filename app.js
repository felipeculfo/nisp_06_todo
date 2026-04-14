const przycisk = document.getElementById('mojPrzycisk');
const input = document.getElementById('mojePole');
const lista = document.getElementById('mojaLista');

przycisk.addEventListener('click', function() {
    const tekst = input.value;

    if (tekst.trim() !== "") {
        const li = document.createElement('li');
        
        // 1. Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            li.classList.toggle('checked');
        });

        // 2. Kontener na tekst (żeby przycisk był osobno)
        const span = document.createElement('span');
        span.textContent = tekst;
        span.style.flex = "1"; // Tekst zajmie całą wolną przestrzeń

        // 3. Przycisk Usuń
        const przyciskUsun = document.createElement('button');
        przyciskUsun.textContent = 'Usuń';
        przyciskUsun.classList.add('btn-usun'); // Dodamy mu osobny styl w CSS
        
        przyciskUsun.addEventListener('click', function() {
            li.remove(); // To kasuje cały element li
        });

        // Składanie wszystkiego do kupy
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(przyciskUsun);
        
        lista.appendChild(li);

        input.value = "";
        input.focus();
    }
});