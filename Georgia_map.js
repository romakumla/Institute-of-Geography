var mymap = L.map('map').setView([41.787697, 44.121094], 6);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm9tYWt1bWxhIiwiYSI6ImNrbnlwNWNhbDFpZ2syd21rNzRkNjVnNDYifQ.J5sGG3gBC0T8SH78VOFKZQ'
}).addTo(mymap);