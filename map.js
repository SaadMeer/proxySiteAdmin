// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// var marker = L.marker([51.5, -0.09]).addTo(map);
// marker.bindPopup("This is a marker!");

// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);
// circle.bindPopup("This is a circle!");

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);
// polygon.bindPopup("This is a polygon!");

// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Define the coordinates for your dots
// var dotCoordinates = [
//     [51.5, -0.09],
//     [51.51, -0.08],
//     [51.52, -0.1],
//     // Add more coordinates as needed
// ];

// // Create markers with custom icons (dots) at each coordinate
// dotCoordinates.forEach(function (coord) {
//     var dotIcon = L.divIcon({
//         className: 'dot-icon',
//         iconSize: [10, 10], // Adjust the size of your dots
//     });

//     L.marker(coord, { icon: dotIcon }).addTo(map);
// });



// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Function to create concentric dots
// function createConcentricDots(innerColor, middleColor, outerColor, radius) {
//     var icon = L.divIcon({
//         className: 'concentric-dots-icon',
//         html: `<div class="inner-dot" style="background-color: ${innerColor};"></div>
//                <div class="middle-dot" style="background-color: ${middleColor};"></div>
//                <div class="outer-dot" style="background-color: ${outerColor};"></div>`,
//         iconSize: [2 * radius, 2 * radius],
//         iconAnchor: [radius, radius]
//     });
//     return icon;
// }

// // Create markers with concentric dots
// var dotCoordinates = [
//     [51.5, -0.09],
//     [51.51, -0.08],
//     [51.52, -0.1]
// ];

// dotCoordinates.forEach(function (coord) {
//     var marker = L.marker(coord, {
//         icon: createConcentricDots('#9a91fb', '#40479f', '#232a5e', 10)
//     }).addTo(map);
// });


var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to create concentric dots
function createConcentricDots(innerColor, middleColor, outerColor, radius) {
    var icon = L.divIcon({
        className: 'concentric-dots-icon',
        html: `<div class="inner-dot" style="background-color: ${innerColor};"></div>
               <div class="middle-dot" style="background-color: ${middleColor};"></div>
               <div class="outer-dot" style="background-color: ${outerColor};"></div>`,
        iconSize: [2 * radius, 2 * radius],
        iconAnchor: [radius, radius]
    });
    return icon;
}

// Define the coordinates for your concentric dots
var concentricDotCoordinates = [
    [51.5, -0.09],
    [51.51, -0.08],
    [51.52, -0.1]
    // Add more coordinates as needed
];

// Create markers with concentric dots at each coordinate
concentricDotCoordinates.forEach(function (coord) {
    var marker = L.marker(coord, {
        icon: createConcentricDots('#9a91fb', '#40479f', '#232a5e', 10)
    }).addTo(map);
});
