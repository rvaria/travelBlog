var map = L.map('map').setView([30, 0], 2.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([43.4, 16.6]).addTo(map);
L.marker([-0.02, 37.9]).addTo(map);
L.marker([48.8, 2.3]).addTo(map);
L.marker([55.8, -4.2]).addTo(map);