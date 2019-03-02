function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

function initMap() {
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow();
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: 50.850610, lng: 4.351009},


      styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
    });
    
    badImage = 'img/bad.png';
    goodImage = 'img/good.png';
    sosImage = 'img/sos.png';
    unkownImage = 'img/unkown.png';
    
    filter = ["SOS", "BAD", "GOOD"]

    $("[type='checkbox']").map((key, element) => {
        $(element).click(() => {
            if ($(element).prop("checked")) {
                filter.push($(element).get(0).value)
            } else {
                index = filter.indexOf($(element).get(0).value)
                if (index > -1) {
                    filter.splice(index, 1)
                }
            }
            filterData()
        })
    })

    markers = []
    
    function filterData(){
        markers.map((marker, key) => {
            marker.setVisible(false)

        })
        filter.map((typeOfLog, key) => {
            markers.map((marker, key) => {
                if (typeOfLog == marker.category) {
                    marker.setVisible(true)
                    if (marker.getAnimation() != null) {
                        marker.setAnimation(marker.getAnimation());
                      }
                }
            })
        })
    }

    $.getJSON( "data.json", function( data ) {
        data.map(device => {
            device.logs.map(reg => {
                if (reg.typeOfLog == "SOS") {
                    image = sosImage
                    animation = google.maps.Animation.BOUNCE
                } else if (reg.typeOfLog == "BAD") {
                    image = badImage
                    animation = google.maps.Animation.DROP
                } else if (reg.typeOfLog == "GOOD") {
                    image = goodImage
                    animation = false
                } else {
                    image = unkownImage
                    animation = false
                }
    
                typeOfLogMarker = new google.maps.Marker({
                    position: {lat: reg.gpsSensor.latitude, lng: reg.gpsSensor.longitude},
                    map: map,
                    icon: image,
                    animation: animation,
                    category: reg.typeOfLog
                    });
                
                markers.push(typeOfLogMarker)
    
                google.maps.event.addListener(typeOfLogMarker, 'click', function(event) {
                    geocoder.geocode({'location': {lat: event.latLng.lat(), lng: event.latLng.lng()}}, (results, status) => {
                        if (status === 'OK' && results[0]) {
                            address = results[0].formatted_address
                        } else {
                            address = 'unkown'
                        }
                        infowindow.setContent(`<div><h2>${reg.typeOfLog}</h2><b>User ID: ${reg.id}</b><p><b>Location: </b>lat:${reg.gpsSensor.latitude},lng:${reg.gpsSensor.longitude}</p><p>${address}</p><p><b>${timeConverter(reg.time)}</b></p><p>${reg.comment}</p><h3>Sensors</h3><p><b>Tilt Sensor: </b> yawn: ${reg.tiltSensor.yawn} roll: ${reg.tiltSensor.roll} pitch: ${reg.tiltSensor.pitch}</p><p><b>Air Sensor: </b>${reg.airSensor.co2PPM}</p><p><b>Distance: </b>${reg.distanceSensor}</p></div>`);
                        infowindow.open(map, this);
                    })
                });
            })
        });
    })

};
