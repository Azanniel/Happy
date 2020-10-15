import leaflet from 'leaflet';

import mapMarker from '../assets/map-marker.svg';

const mapIcon = leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 69],
  popupAnchor: [170, 2]
});

export { mapIcon };
