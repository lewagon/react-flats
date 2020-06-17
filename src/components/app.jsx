import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import flatsList from '../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

export default function App() {
  const [ flats, setFlats ] = useState(flatsList);
  const [ selectedFlat, setSelectedFlat ] = useState(flats[0]);

  function center() {
    return {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };
  }

  const selectFlat = index => setSelectedFlat(flats[index]);

  return (
    <div className="container">
      <FlatList
        flats={flats}
        selectedFlat={selectedFlat}
        selectFlat={selectFlat}
      />
      <div className="map-container">
        <GoogleMapReact defaultCenter={center()} defaultZoom={12}>
          <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
}
