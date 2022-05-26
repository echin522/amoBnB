import React from 'react';

const Marker = () => {
    return (
        <div className="marker"
            style={{ backgroundColor: "blue", cursor: 'pointer'}}
            title={name}
        />
    );
  };

  export default Marker;