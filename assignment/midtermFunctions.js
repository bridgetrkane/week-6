/* ================================
Week 6 Assignment: Midterm Function Signatures
================================ */

/* =====================
Leaflet Configuration
===================== */
var dataset = 'MOHCD_Affordable_Rental_Portfolio.geojson';

var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var resetMap = function(parsed) {
  _.each(parsed, function(val){
    map.removeLayer(val);
  });
};

var data = [];
var getAndParseData = function() {
  $.ajax(dataset).done(function(val){
    var parsed= JSON.parse(val);
    var mark= _.map(parsed,function(val){
      data.push(val);
    });

  });

};
