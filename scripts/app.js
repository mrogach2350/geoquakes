// // define globals
// var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
// var $quakesList;
// var map;
// var template;
//
// $(document).on("ready", function() {
//   $.ajax({
//     method: 'GET',
//     url: weekly_quakes_endpoint,
//     success: postQuakes
//   });
//   initMap();
// });
//   function postQuakes(json){
//     var source = $('#quake-template').html();
//     var template = Handlebars.compile(source);
//     var quakeHtml = template({results: json.features})
//     $('#info').append(quakeHtml);
//   }
//
//   // var location = {
//   //   lat: 20,
//   //   lng: 20
//   // };
//   // new google.maps.Marker({
//   //   map: map,
//   //   position: results[0].geometry.location});
