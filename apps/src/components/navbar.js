import React from 'react';

import { Link } from 'react-router-dom';

function navbar() {
  return (
    <div>
      <nav className="">
        <Link to="/" className="">SUAS</Link>
         <div className="">
          <ul className="">
          <li className="">
           <Link to="/list" className="">Images</Link>
          </li>
           <li className="">
           <Link to="/create" className="">Flightpath</Link>
           </li>
           <li className="">
           <Link to="/user" className="">Create User</Link>
           </li>
         </ul>
        </div>
      </nav>
    </div>
  )
}

export default navbar

