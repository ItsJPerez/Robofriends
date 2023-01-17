
import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow:'scroll', border: '2px solid black', height: '800px' , marginTop:'2rem'}}>
      {props.children}
    </div>
  );
};

export default Scroll;