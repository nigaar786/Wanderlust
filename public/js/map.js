maptilersdk.config.apiKey = mapApiKey;
      const map = new maptilersdk.Map({
        container: 'map', // container's id or the HTML element to render the map
        style: maptilersdk.MapStyle.OUTDOOR,
        center: listing.geometry.coordinates, // starting position [lng, lat]
        zoom:14, // starting zoom
      });   

const marker = map.on("load", () => {
  new maptilersdk.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new maptilersdk.Popup({offset: 25})
      .setHTML(`<h4>${listing.location}</h4><p>Exact location provided after booking </p>`)
    )
    .addTo(map);
});