var size = window.matchMedia("(max-width: 480px)");
var map;
if(size.matches) {
    map = L.map('map').setView([32, 30], 2.5);
} else {
    map = L.map('map').setView([33, 0], 2.5);
}

map.doubleClickZoom.disable();
var bounds = L.latLngBounds([-90, -180], [90, 180]);
map.setMaxBounds(bounds);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    noWrap: true,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var croatia = L.marker([43.4, 16.6]).addTo(map).bindPopup('<a href="../pages/croatia.html">Croatia</a>');
var paris = L.marker([48.8, 2.3]).addTo(map).bindPopup('<a href="../pages/paris.html">Paris</a>');
var scotland = L.marker([55.8, -4.2]).addTo(map).bindPopup('<a href="../pages/scotland.html">Scotland</a>');
var budapest = L.marker([47.4, 19]).addTo(map).bindPopup('<a href="../pages/budapest.html">Budapest</a>');
var kenya = L.marker([-4, 39.6]).addTo(map).bindPopup("Kenya");
var seville = L.marker([37.3, -5.9]).addTo(map).bindPopup("Seville");