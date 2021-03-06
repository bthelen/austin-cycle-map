var map = L.map('map', {
    maxBounds: L.latLngBounds(L.latLng(29.9276, -98.2246), L.latLng(30.6793,-97.229))
}).setView([30.2703704,-97.736922], 14);

var osmAustinMinimal = L.tileLayer('http://basemaptiles{s}.austincyclemap.com/austin-open-street-map-minimal/{z}/{x}/{y}.png', {
    minZoom: 10,
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(map);

var osmAustinBright = L.tileLayer('http://basemaptiles{s}.austincyclemap.com/austin-open-street-map-bright/{z}/{x}/{y}.png', {
    minZoom: 10,
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
});

var bikeRoutes = L.tileLayer('http://tiles{s}.austincyclemap.com/austin-bike-routes/{z}/{x}/{y}.png', {
    minZoom: 10,
    maxZoom: 18,
    attribution: 'Bike Routes Courtesy of <a href="http://www.austintexas.gov/department/gis-and-maps">City of Austin GIS Division</a>'
}).addTo(map);

var baseLayers = {
    "OSM Minimal": osmAustinMinimal,
    "OSM Bright": osmAustinBright

};
var overlays = {
    "City of Austin Bike Routes": bikeRoutes
};

L.control.layers(baseLayers, overlays).addTo(map);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += '<div id="geolocationErrorMessageHolder"></div><div class="legend-title">Bikeability Index of Bike Routes</div> ';
    div.innerHTML += '<i style="background:#229A00;"></i>High Ease of Use<br>';
    div.innerHTML += '<i style="background:#4B5ACE;"></i>Medium Ease of Use<br>';
    div.innerHTML += '<i style="background:#FF6600;"></i>Low Ease of Use -- Not for Novice Cyclist<br>';
    return div;
};
legend.addTo(map);

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    if (L.latLngBounds(L.latLng(29.9276, -98.2246), L.latLng(30.6793,-97.229)).contains(e.bounds)) {
        map.setView(e.latlng, 16);
    } else {
        map.setView([30.2703704,-97.736922], 14);
    }
}
function onLocationError(e) {
    if(e && e.code === 1) {
        document.getElementById("geolocationErrorMessageHolder").innerHTML = '<div class="legend-title"><i class="geolocation-error"></i>You have opted out of GeoLocation! <a href="http://en.wikipedia.org/wiki/W3C_Geolocation_API">More information</a></div>';
    }else {
        return;
    }
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-47433344-1', 'austincyclemap.com');
ga('send', 'pageview');