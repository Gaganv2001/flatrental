import React, { useState, useEffect } from 'react'
import axios from "axios";
// import Navbar from '../components/Navbar';
// eslint-disable-next-line
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';


const Homescreen = () => {
  const [rooms, setrooms] = useState([])
  const [loading, setloading] = useState()
  // eslint-disable-next-line 
  const [error, seterror] = useState()
  useEffect( () => {
    const temp = async()=>{
      try {
        setloading(true)
        const data = (await axios.get('/api/rooms/getallrooms')).data
  
        setrooms(data)
        setloading(false)
  
      } catch (error) {
        seterror(true)
        console.log(error)
        setloading(false)
  
      }
    }
    temp();
    
  }, []);



return (
  <div className='container'>
    <div className='row justify-content-center mt-5'>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Loader />
        </div>
      ) : rooms.length > 0 ? (
        rooms.map((room) => (
          <div className="col-md-9 mt-3" key={room.id}>
            <Room room={room} />
          </div>
        ))
      ) : (
        <div>No Flats available.</div>
      )}
    </div>
  </div>
);
      }
export default Homescreen