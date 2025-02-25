let centralUSCoordinates = [39.28, -96.8] //random near middle coordinate
let zoomLevel = 7 //probably country level

let map = L.map('bridges-map').setView(centralUSCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

bridges =  [
    {"name": "Verrazzano-Narrows Bridge", "location": "New York, NY", "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "location": "San Francisco and Marin, CA", "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "location": "Mackinaw and St Ignace, MI", "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "location": "New York, NY and New Jersey, NJ", "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "location": "Tacoma and Kitsap, WA", "coordinates": [47.2690, -122.5517] }
]


bridges.array.forEach(function(longestBridges) {

    let markerText = `<b>${longestBridges.name}</b><br><p>${longestBridges.location}"</p>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
});
