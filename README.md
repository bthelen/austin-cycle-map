Austin Cycle Map
====================

Description
--------------------
A mobile optimized web mapping application for viewing [City of Austin](http://www.austintexas.gov/department/gis-and-maps) bike routes.  You can find the aplication at [AustinCycleMap.com](http://www.austincyclemap.com).

Tools and Frameworks Used
-------------------------
* [Leaflet](http://leafletjs.com/)
* [TileMill](http://www.mapbox.com/tilemill/) used to create map tiles.
* [tilemill-austin-bike-routes](https://github.com/bthelen/tilemill-austin-bike-routes) project contains the TileMill project for creating the bike route tiles.
* [osm-bright](https://github.com/mapbox/osm-bright) project used to create the basemap._

Datasets Used
-------------------------
* [Open Street Map](http://openstreetmap.org)
* [City of Austin Bike Routes](http://www.austintexas.gov/department/gis-and-maps) via City of Austin GIS Division

Run Local
-------------------------
npm install
node app.js

