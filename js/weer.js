
const weerMelding = document.getElementById("weer-melding");
const weerLijst = document.getElementById("weer-lijst");
const weerSjabloon = document.getElementById("weer-sjabloon");

fetch("https://api.open-meteo.com/v1/forecast?latitude=51.22&longitude=4.40&current=temperature_2m,wind_speed_10m&timezone=Europe%2FBrussels")
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })
    .then(data => {
        weerMelding.textContent = "";

        if (!data.current ||
            data.current.temperature_2m == null ||
            data.current.wind_speed_10m == null) {

            weerMelding.textContent = "Er zijn geen weergegevens beschikbaar.";
            return;
        }

        const kaartje = weerSjabloon.content.cloneNode(true);

        kaartje.querySelector('[data-veld="temperatuur"]').textContent =
            data.current.temperature_2m + " °C";

        kaartje.querySelector('[data-veld="windsnelheid"]').textContent =
            data.current.wind_speed_10m + " km/u";

        weerLijst.append(kaartje);
    })
    .catch(fout => {
        weerMelding.textContent =
            "De weergegevens konden niet worden geladen. Probeer het later opnieuw.";

        console.error("Fout bij het ophalen: " + fout);
    });
