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
      center: {lat: 50.85, lng: 4.35},
      styles: [
                {
                    "featureType": "all",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#a1f7ff"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 13
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#144b53"
                        },
                        {
                            "lightness": 14
                        },
                        {
                            "weight": 1.4
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "color": "#a1f7ff"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#a1f7ff"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#a1f7ff"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#a1f7ff"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#08304b"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#020202"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#0c4152"
                        },
                        {
                            "lightness": 5
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "invert_lightness": true
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "color": "#a1f7ff"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "invert_lightness": true
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "color": "#a1f7ff"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#a1f7ff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#0b434f"
                        },
                        {
                            "lightness": 25
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "lightness": "0"
                        },
                        {
                            "saturation": "0"
                        },
                        {
                            "invert_lightness": true
                        },
                        {
                            "visibility": "simplified"
                        },
                        {
                            "hue": "#00e9ff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#a1f7ff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#a1f7ff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#0b3d51"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "invert_lightness": true
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#010d11"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "invert_lightness": true
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#146474"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#021019"
                        }
                    ]
                }
            ]
    });
    
    badImage = 'img/bad.png';
    goodImage = 'img/good.png';
    sosImage = 'img/sos.png';
    unkownImage = 'img/unkown.png';
    
    filter = ["SOS SIGNAL", "BAD FEEDBACK", "GOOD FEEDBACK"]

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
        filter.map((feedback, key) => {
            markers.map((marker, key) => {
                if (feedback == marker.category) {
                    marker.setVisible(true)
                }
            })
        })
    }

    $.getJSON( "data.json", function( data ) {
        data.map(reg => {
            if (reg.feedback == "SOS SIGNAL") {
                image = sosImage
                animation = google.maps.Animation.BOUNCE
                className = "sos"
            } else if (reg.feedback == "BAD FEEDBACK") {
                image = badImage
                animation = google.maps.Animation.DROP
                className = "bad"
            } else if (reg.feedback == "GOOD FEEDBACK") {
                image = goodImage
                animation = false
                className = "good"
            } else {
                image = unkownImage
                animation = false
            }

            feedbackMarker = new google.maps.Marker({
                position: {lat: reg.location.lat[0], lng: reg.location.lng[0]},
                map: map,
                icon: image,
                animation: animation,
                category: reg.feedback
                });
            
            markers.push(feedbackMarker)

            google.maps.event.addListener(feedbackMarker, 'click', function(event) {
                geocoder.geocode({'location': {lat: event.latLng.lat(), lng: event.latLng.lng()}}, (results, status) => {
                    if (status === 'OK' && results[0]) {
                        address = results[0].formatted_address
                    } else {
                        address = 'unkown'
                    }
                    infowindow.setContent(`<div><h2>${reg.feedback}</h2><b>User ID: ${reg.user_id}</b><p><b>Location: </b>lat:${reg.location.lat},lng:${reg.location.lng}</p><p>${address}</p><p>${reg.description}</p><p><b>${timeConverter(reg.time)}</b></p><img width="320px" src="${reg.photo}"><h3>Sensors</h3><p><b>Light Sensor: </b>${reg.sensors.light_sensor}</p><p><b>Ultrasonic Sensor: </b>${reg.sensors.ultrasonic_sensor}</p><p><b>Accelerometer: </b>${reg.sensors.accelerometer}</p></div>`);
                    infowindow.open(map, this);
                })
            });
            
        });
    })

};
