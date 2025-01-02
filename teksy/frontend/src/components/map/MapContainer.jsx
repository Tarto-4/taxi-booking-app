import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'your-mapbox-access-token-here';

export const MapContainer = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0], // Replace with desired coordinates
      zoom: 9,
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} style={{ height: '500px', width: '100%' }} />;
};
