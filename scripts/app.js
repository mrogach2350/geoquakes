// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;

$(document).on("ready", function() {
  $.ajax({
    method: 'GET',
    url: weekly_quakes_endpoint,
    success: postQuakes
  });
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 2});
    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({'address': 'San Francisco'}, function(results, status) {
      var latitude = -45;
      var longitude = 131;
      var myLatLng = {lat: latitude, lng: longitude};
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: map,
          position: myLatLng
        });
        console.log(results[0].geometry.location);
      } else {
        window.alert('Geocode was not successful for the following reason: ' +
            status);
      }
    });
  }
});
  function postQuakes(json){
    var source = $('#quake-template').html();
    var template = Handlebars.compile(source);
    var quakeHtml = template({results: json.features})
    $('#info').append(quakeHtml);
  }
  // var location = {
  //   lat: 20,
  //   lng: 20
  // };
  // new google.maps.Marker({
  //   map: map,
  //   position: results[0].geometry.location});
