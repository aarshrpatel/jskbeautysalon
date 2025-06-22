'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// fix default icon paths (Leaflet’s webpack quirk)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const locations: {
  name: string;
  position: [number, number];
  address: string;
}[] = [
  {
    name: 'Summerville',
    position: [33.1023702, -80.1263005],
    address: '205 S Cross Creek Dr Unit C, Summerville, SC',
  },
  {
    name: 'Goose Creek',
    position: [33.0315676, -80.0594048],
    address: '604 St James Ave Unit J, Goose Creek, SC',
  },
];

export default function MapsSection() {
  // compute center of all pins
  const centerLat =
    locations.reduce((sum, loc) => sum + loc.position[0], 0) / locations.length;
  const centerLng =
    locations.reduce((sum, loc) => sum + loc.position[1], 0) / locations.length;

  return (
    <div className="mt-12 rounded-lg overflow-hidden shadow-md">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: '400px', width: '100%' }}
      >
        {/* OpenStreetMap tiles (no key required) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* One Marker per location */}
        {locations.map((loc) => (
          <Marker key={loc.name} position={loc.position}>
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
