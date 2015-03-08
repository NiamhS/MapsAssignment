var map = L.map('NiamhMap').setView([40.714269, -74.005973], 13);

// Added an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Took code for adding a market from Leaflet; changed coordinates to my address in NY
var marker = L.marker([40.814383,-73.959234]).addTo(map);
