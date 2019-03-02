Login Page
https://codepen.io/remsrob/pen/ZRyqNx

Map
ICONS https://mapicons.mapsmarker.com/markers/tourism/flag/?custom_color=ffffff
    Marker and Filtering
        Good
        Bad
        Sos
https://snazzymaps.com/editor/customize/129826

Stats Page
https://codepen.io/Gronghon/full/WvZQpg

JSON DATA GENERATOR
https://www.json-generator.com/

[
  '{{repeat(3,10)}}',
  {
    _id: "{{index(32111654)}}",
    logs: [
      '{{repeat(3,10)}}',
    {
      "id": "{{index(321654101)}}",
      "typeOfLog": "{{random(['GOOD'], ['SOS'], ['BAD'])}}",
      "time": "{{integer(1548979200, 1551525268)}}",
      "distanceSensor": "{{floating(10.0, 40, 2)}}",
      "tiltSensor": {
        "yawn": "{{floating(0.100, 1, 2)}}",
        "roll": "{{floating(0.100, 1, 2)}}",
        "pitch": "{{floating(0.100, 1, 2)}}"
      },
      "comment": '{{lorem(1, "sentence")}}',
      "gpsSensor": {
        "latitude": '{{floating(50.000001, 51.3)}}',
        "longitude": '{{floating(2.600001, 5.7)}}'
      },
      "airSensor":{
        "co2PPM": "{{integer(50,100)}}"
      }
    }
    ]
  }
]
