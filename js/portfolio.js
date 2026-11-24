
const melding = document.getElementById("melding");
const lijst = document.getElementById("lijst");
const sjabloon = document.getElementById("sjabloon");

fetch("json/projecten.json")
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })
    .then(data => {
        melding.textContent = "";

        if (data.length === 0) {
            melding.textContent = "Er zijn nog geen projecten.";
        }

        for (const project of data) {
            const kaartje = sjabloon.content.cloneNode(true);

            kaartje.querySelector('[data-veld="titel"]').textContent = project.titel;
            kaartje.querySelector('[data-veld="samenvatting"]').textContent = project.samenvatting;
            kaartje.querySelector('[data-veld="afbeelding"]').src = project.afbeelding;
            kaartje.querySelector('[data-veld="afbeelding"]').alt = project.alt;
            kaartje.querySelector('[data-veld="link"]').href = project.link;

            lijst.append(kaartje);
        }
    })
    .catch(fout => {
        melding.textContent = "De projecten konden niet worden geladen. Probeer het later opnieuw.";
        console.error("Fout bij het ophalen: " + fout);
    });
