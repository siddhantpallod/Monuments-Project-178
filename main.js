let latitude = 17.9254481, longitude = 73.6599035

mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkZGhhbnRwYWxsb2QiLCJhIjoiY2txdGlzb2xlMHYwbDJ1bXlpa2pzcWsyeSJ9.y8NvUPSjgt2J4gLCNtYaRA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center = [longitude, latitude],
    zoom: 4
})

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)

var img1 = document.querySelector("#amber")
var img2 = document.querySelector("#gateway")
var img3 = document.querySelector("#gate")
var img4 = document.querySelector("#lotus")
var img5 = document.querySelector("#victoria")


var marker1 = new mapboxgl.Marker({
    element: img1
})
    .setLngLat([75.85133, 26.98547])
    .addTo(map)

var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([72.835163, 18.920180])
	.addTo(map);

var marker3 = new mapboxgl.Marker({
    element: img3
})
    .setLngLat([77.22931, 28.61495])
    .addTo(map);

var marker4 = new mapboxgl.Marker({
    element: img4
})
    .setLngLat([77.25880, 28.553501])
    .addTo(map);

var marker5 = new mapboxgl.Marker({
    element: img5
})
    .setLngLat([88.342785, 22.546170])
    .addTo(map);
    