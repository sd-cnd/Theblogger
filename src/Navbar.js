// import { Link } from 'react-router-dom';

// const Navbar = () => {

//     function myFunction() {
//         var x = document.getElementById("myTopnav");
//         if (x.className === "topnav") {
//           x.className += " responsive";
//         } else {
//           x.className = "topnav";
//         }
//       }
//     return ( 
//         <nav className="navbar">
//             <h1>The Blogger</h1>
//             <div className="links">
//                 <Link to="/" style={{color:"white",backgroundColor: '#f1356d',borderRadius: '8px'}}>Home</Link>
//                 <Link to="/create" style={{color:"white",backgroundColor: '#f1356d',borderRadius: '8px'}}>Create</Link>
//                 <Link to="/" style={{color:"white",backgroundColor: '#f1356d',borderRadius: '8px'}}>Sign In</Link>
//                 <Link className="icon" onclick="myFunction()">
//     <i class="fa fa-bars"></i></Link>
//             </div>
//         </nav>
//     );
// }
 
// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "navbar") {
          x.className += " responsive";
        } else {
          x.className = "navbar";
        }
    }

    return ( 
        <nav className="navbar" id="myTopnav">
            <h1>The Blogger</h1>
            <div className="links">
                <Link className="active" to="/" style={{color:"white",backgroundColor: '#f1356d',borderRadius: '8px'}}>Home</Link>
                <Link to="/" style={{color:"white",backgroundColor: '#f1356d',borderRadius: '8px'}}>About</Link>
                <Link to="/create" style={{color:"white",backgroundColor: '#f1356d',borderRadius: '8px'}}>Create</Link>
                <Link to="/" style={{color:"white",backgroundColor: '#f1356d',borderRadius: '8px'}}>Sign In</Link>
                <Link to="/" className="icon" onClick={myFunction}>
                    <i className="fa fa-bars"></i>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
