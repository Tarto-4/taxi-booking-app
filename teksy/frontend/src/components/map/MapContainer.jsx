import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useBooking } from '@/hooks/useBooking';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export function MapContainer() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const { pickup, dropoff, setPickup, setDropoff } = useBooking();

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9
    });

    // Add navigation control
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add geocoder control for pickup
    const pickupGeocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Pickup location',
      marker: false
    });

    // Add geocoder control for dropoff
    const dropoffGeocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Dropoff location',
      marker: false
    });

    map.current.addControl(pickupGeocoder, 'top-left');
    map.current.addControl(dropoffGeocoder, 'top-left');

    // Handle location selection
    pickupGeocoder.on('result', (e) => {
      setPickup({
        coordinates: e.result.center,
        address: e.result.place_name
      });
    });

    dropoffGeocoder.on('result', (e) => {
      setDropoff({
        coordinates: e.result.center,
        address: e.result.place_name
      });
    });

    return () => map.current.remove();
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-[400px] rounded-lg shadow-md"
    />
  );
}
