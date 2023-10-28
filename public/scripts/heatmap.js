var map = L.map('map').setView([latitude, longitude], zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create a heatmap layer using your data
var heat = L.heatLayer(data, { radius: 20 }).addTo(map);

// Add data points to the heatmap (data should be an array of [lat, lng] points)
data.forEach(function(point) {
    heat.addLatLng(point);
});