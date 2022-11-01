function myMap() {
    var mapProp= {
    center:new google.maps.LatLng(27.772497820255108, -82.6348001872114),
    zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}