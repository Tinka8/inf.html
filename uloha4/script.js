// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 16,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(48.292105, 18.075127), // Nitra

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#747474" }, { lightness: "23" }],
        },
        {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [{ color: "#f38eb0" }],
        },
        {
            featureType: "poi.government",
            elementType: "geometry.fill",
            stylers: [{ color: "#ced7db" }],
        },
        {
            featureType: "poi.medical",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffa5a8" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#c7e5c8" }],
        },
        {
            featureType: "poi.place_of_worship",
            elementType: "geometry.fill",
            stylers: [{ color: "#d6cbc7" }],
        },
        {
            featureType: "poi.school",
            elementType: "geometry.fill",
            stylers: [{ color: "#c4c9e8" }],
        },
        {
            featureType: "poi.sports_complex",
            elementType: "geometry.fill",
            stylers: [{ color: "#b1eaf1" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ lightness: "100" }],
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [{ visibility: "off" }, { lightness: "100" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffd4a5" }],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffe9d2" }],
        },
        {
            featureType: "road.local",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
        },
        {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [{ weight: "3.00" }],
        },
        {
            featureType: "road.local",
            elementType: "geometry.stroke",
            stylers: [{ weight: "0.30" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text",
            stylers: [{ visibility: "on" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#747474" }, { lightness: "36" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#e9e5dc" }, { lightness: "30" }],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ visibility: "on" }, { lightness: "100" }],
        },
        {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#d2e7f7" }],
        },
    ],
};

// Get the HTML DOM element that will contain your map
// We are using a div with id="map" seen below in the <body>
var mapElement = document.getElementById("map");

// Create the Google Map using our element and options defined above
var map = new google.maps.Map(mapElement, mapOptions);

// Let's also add a marker while we're at it
var marker = new google.maps.Marker({
    position: new google.maps.LatLng(48.292105, 18.075127),
    map: map,
    title: "Snazzy!",
    });
}