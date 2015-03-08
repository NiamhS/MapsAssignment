var map = L.map('NiamhMap').setView([40.714269, -74.005973], 13);

// Added an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var mappingDataArray = mappingData.rows

for ( i = 0; i < mappingDataArray.length; i++) {
	
	var locationObject = mappingDataArray[i];
	
	// Took code for adding a market from Leaflet; changed coordinates to my address in NY
	var marker = L.marker([locationObject.latitude, locationObject.longitude]).addTo(map);

	marker.bindPopup("<b>Niamh's Apartment!</b><br>A popup to have a popup.").openPopup();
}