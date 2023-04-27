import React, { useEffect, useRef,useState  } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { Map, LatLng,LeafletMouseEvent  } from 'leaflet';

import 'leaflet/dist/leaflet.css';

interface MyComponentProps {
  lng: number;
  lat: number;
  update: boolean;
  setLat: React.Dispatch<React.SetStateAction<number>>;
  setLon: React.Dispatch<React.SetStateAction<number>>
}

function OpenStreetMap({ lng, lat, setLon, setLat, update }: MyComponentProps) {

  const mapRef = useRef<Map>(null);
  const [position, setPosition] = useState<[number, number]>([lat, lng]);
  const map = mapRef.current;
  
  useEffect(() => {

    if (map) {
      map.setView([lat, lng]);
      const handleMapClick = (e: any) => {
        setPosition([e.latlng.lat,e.latlng.lng])
        setLon(e.latlng.lng)
        setLat(e.latlng.lat)
        
      };

      map.on('click', handleMapClick);
      return () => {
        map.off('click', handleMapClick);
      };
    }
  }, [update]);



  return (
    <MapContainer
     ref={mapRef} center={[lat, lng]}
     maxBounds={[
      [85, -180], // North West coordinates
      [-85, 180] // South East coordinates
    ]}
     minZoom={2} zoom={10} style={{ width: '100%', height: '100%' }}
     >
      <TileLayer
        url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=4mtVhNdD5BvavHkLo5LX"
        attribution='<a href="https://www.maptiler.com/">MapTiler</a> <a href="https://www.openstreetmap.org/about/">OpenStreetMap contributors</a>'
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
}

export default OpenStreetMap;