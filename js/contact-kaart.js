
const kaart = L.map("kaart").setView([51.23009, 4.41616], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-bijdragers'
}).addTo(kaart);

L.marker([51.23009, 4.41616])
    .addTo(kaart)
    .bindPopup("AP Hogeschool, Ellermanstraat 33");
