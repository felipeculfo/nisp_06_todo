const przycisk = document.getElementById('mojPrzycisk');
        const input = document.getElementById('mojePole');
        const lista = document.getElementById('mojaLista');

        przycisk.addEventListener('click', function() {
            const tekst = input.value;

            if (tekst.trim() !== "") {
                // 1. Tworzymy nowy, pusty element <li>
                const nowyElement = document.createElement('li');
                
                // 2. Wkładamy do niego tekst z inputa
                nowyElement.textContent = tekst;

                // 3. Dodajemy gotowy element do naszej listy <ul> na stronie
                lista.appendChild(nowyElement);

                // 4. Czyścimy pole tekstowe i ustawiamy na nim kursor
                input.value = "";
                input.focus();
            } else {
                alert("Nie możesz dodać pustego elementu!");
            }
        });

        // DODATEK: Obsługa klawisza Enter
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                przycisk.click();
            }
        });