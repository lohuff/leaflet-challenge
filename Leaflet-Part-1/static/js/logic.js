// const url for weekly significant quakes
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

var quakeMap = L.map('map', {
    center : [39,-119],
    zoom: 7,
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(quakeMap)

d3.json(url).then(function(data){
    //getting the data
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            //circlemarkers
            return L.circleMarker(latlng, {
                radius: setSize(feature.properties.mag),
                fillColor: setColor(feature.geometry.coordinates[2]),
                fillOpacity: 0.7,
                color: "black",
                weight: 1,
                //popup
            }) .bindPopup("<h2>Place: " + feature.properties.place  + "</h2><hr /><h3>Magnitude: " + feature.properties.mag + "<hr />Depth: " + feature.geometry.coordinates[2] + "㎞</h3>"+ "<h3> Date Time: " + new Date(feature.properties.time) + "</h3><hr />");
        }
    }).addTo(quakeMap);
});

//colors
function setColor(depth) {
    if (depth < 10) {
      return "#66ff66"; 
    } else if (depth < 30) {
      return "#ccff66"; 
    } else if (depth < 50) {
      return "#ffcc66"; 
    } else if (depth <70) {
      return "#ff9933"; 
    } else if (depth <90) {
        return "#ff5050"; 
    } else {
        return "#cc0000"; 
    }
  }
//display legend and colors
var legend = L.control({position: 'bottomleft'});
  legend.onAdd = function () {
    var div = L.DomUtil.create('div', 'info legend');
    labels = ["- 10-10", "10-30", "30-50", "50-70", "70-90", "90+"];
    var color = ['#66ff66','#ccff66','#ffcc66','#ff9933','#ff5050','#cc0000']

    // loop each label and get the color
    for (var i = 0; i < labels.length; i++) {
      div.innerHTML +=
          '<ul style=\"background-color:' + color[i]+ '\">'+labels[i] +'</ul> ';
    }

    return div;
  };
  legend.addTo(quakeMap);

  //multiply
  function setSize(magnitude) {
    return magnitude * 5;
  }