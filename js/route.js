var myCenter=new google.maps.LatLng(59.364699,17.964180);
var activeMarker = null;

var route = {
    name : "",
    markers : []
};
    
function initialize()
{
    var mapProp = {
        center:myCenter,
        zoom:10,
        streetViewControl: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });

    var infowindow = new google.maps.InfoWindow({
        content: ""
    });

    function placeMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            draggable: true,
            map: map,
            info: {
                title: "",
                text: "",
                ttsText: "",
                rad: 100},
            // Function to resolve circular dependency
            toJSON : function() { return this.info }
        });
        marker.addListener('click', function() {
            infowindow.content = marker.info.title;
            infowindow.open(map, marker);
            markerSelect(marker);
        });
        route.markers.push(marker);
        markerSelect(marker);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("saveBtn").addEventListener('click',function () {
        if (activeMarker == null) {
            alert("No selected marker");    
        }
        else {
            route.name = document.getElementById("routeFormName").value;
            activeMarker.info.title = document.getElementById("formName").value;
            activeMarker.info.text = document.getElementById("formInfo").value;
            activeMarker.info.ttsText = document.getElementById("formTts").value;
         }
    });
    
    document.getElementById("genBtn").addEventListener('click', function() {
        var rootJSON = "";
        rootJSON += JSON.stringify(route);
        alert(rootJSON);
        saveRoute("SIMON2", rootJSON);
    });
});

function markerSelect(marker) {
    activeMarker = marker;
    document.getElementById("formName").value = marker.info.title;
    document.getElementById("formTts").value = marker.info.ttsText;
    document.getElementById("formInfo").value = marker.info.text;
    document.getElementById("lat").innerHTML = marker.getPosition().lat();
    document.getElementById("lon").innerHTML = marker.getPosition().lng();
    document.getElementById("rad").innerHTML = marker.info.rad;
}