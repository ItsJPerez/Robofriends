import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc white grow bg-dark-gray br3 pa4 ma4 dib bw2 shadow-5 w-20'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;