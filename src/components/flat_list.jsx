import React from 'react';
import Flat from './flat';

export default function FlatList(props) {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            key={flat.lat}
            selected={flat.name === props.selectedFlat.name}
            index={index}
            selectFlat={props.selectFlat}
          />
        );
      })}
    </div>
  );
}
