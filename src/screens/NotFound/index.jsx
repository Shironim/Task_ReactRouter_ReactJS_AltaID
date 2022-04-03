import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='App'>
      <h1>Page You Search Are Not Found</h1>

      <p>Go Back to Righ Path</p>
      <Link to="/" >Home</Link>
    </div>
  )
}

export default NotFound;