import { ReactNode } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from 'react-map-gl';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const Maps = ({ lat, lng, zoom, children }: { lat?: number; lng?: number; zoom?: number; children?: ReactNode }) => {

  return (
    <Map
      id="map"
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        latitude: lat ?? 13.9419,
        longitude: lng ?? 121.1644,
        zoom: zoom ?? 13
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {children}
    </Map>
  )
};

export default Maps;
