import React from 'react';
import { Link } from 'react-router-dom';

function Landingscreen() {
  return (
    <div className='landing' >
      <div className='landing-content'>
        <h2 style={{ fontSize: '130px' }}>Havenly</h2>
        <h1>Discover your next adventure with seamless</h1>
        <h1 style={{ paddingTop: '5px' }}>flat bookings at your fingertips</h1>
        <Link to='/home'>
          <button className='btn landingbtn' style={{ marginTop: '30px' }}>Search Flats</button>
        </Link>
      </div>
    </div>
  );
}

export default Landingscreen;
