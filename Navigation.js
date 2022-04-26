import React from 'react';
import { Link } from 'react-router-dom';


function Navigation (){

  return( 
  <div>
    <nav>
      <ul>
        <li>
          <Link className="App-link" to ="/">Home Page</Link>
        </li>
        <li>
          <Link className="App-link" to="/order">My Favorite Collection</Link>
        </li>
        <li>
          <Link className="App-link" to="/stores">More of my Collections</Link>
        </li>
      </ul>
    </nav>
  </div>
    
  );

}



export default Navigation