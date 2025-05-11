import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

const RideMapWithVehicle = ({ startCoords, endCoords }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    // Create routing control
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(startCoords[0], startCoords[1]),
        L.latLng(endCoords[0], endCoords[1]),
      ],
      createMarker: function () {
        return null; // hide default markers
      },
      addWaypoints: false,
      routeWhileDragging: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
    }).addTo(map);

    // Animate a vehicle icon along the route
    routingControl.on("routesfound", function (e) {
      const route = e.routes[0].coordinates;
      let i = 0;

      const vehicleMarker = L.marker(route[0], {
        icon: L.icon({
          iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png", // vehicle icon
          iconSize: [40, 40],
        }),
      }).addTo(map);

      const move = () => {
        if (i >= route.length) return;
        vehicleMarker.setLatLng(route[i]);
        i++;
        setTimeout(move, 100); // speed of animation
      };

      move();
    });

    return () => {
      map.removeControl(routingControl);
    };
  }, [startCoords, endCoords]);

  return (
    <MapContainer
      center={startCoords}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default RideMapWithVehicle;
