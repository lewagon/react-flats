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

  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API ? {key: process.env.REACT_APP_GOOGLE_MAPS_API} : null
  return (
    <div className="container">
      <FlatList
        flats={flats}
        selectedFlat={selectedFlat}
        selectFlat={selectFlat}
      />
      <div className="map-container">
        <GoogleMapReact 
          bootstrapURLKeys={API_KEY} 
          defaultCenter={center()} 
          defaultZoom={12}
        >
          <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
}
