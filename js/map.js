var map = L.map('map').setView([30, 0], 2.5);
map.doubleClickZoom.disable();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



var croatia = L.marker([43.4, 16.6]).addTo(map).bindPopup('<a href="../pages/croatia.html">Croatia</a>');

var kenya = L.marker([-4, 39.6]).addTo(map).bindPopup("Kenya");

var paris = L.marker([48.8, 2.3]).addTo(map).bindPopup('<a href="../pages/paris.html">Paris</a>');

var scotland = L.marker([55.8, -4.2]).addTo(map).bindPopup('<a href="../pages/scotland.html">Scotland</a>');

var budapest = L.marker([47.4, 19]).addTo(map).bindPopup('<a href="../pages/budapest.html">Budapest</a>');