import React from 'react';

export default function Flat(props) {
  const handleClick = () => props.selectFlat(props.index);

  return (
    <div
      className={`card${props.selected ? ' active' : ''}`} 
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${props.flat.imageUrl}')`
      }}
    >
      <div className="card-category">{props.flat.price} {props.flat.priceCurrency}</div>
      <div className="card-description">
        <h2>{props.flat.name}</h2>
      </div>
      <a className="card-link" href="#" onClick={handleClick}></a>
    </div>
  );
}
