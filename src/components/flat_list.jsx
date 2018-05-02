import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
