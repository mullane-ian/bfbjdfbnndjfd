// import React from "react";
// import { Link, withRouter } from "react-router-dom";

// function Navigation(props) {
//   return (
//     <header className="header-inner">
 
//         <div className="header-inner">
//           <Link className="logo" to="/">
//             Ian Mullane.
//           </Link>

//           <div>
//             <ul className="navbar-nav ml-auto">
//               <li
//                 className={`nav-item  ${
//                   props.location.pathname === "/" ? "active" : ""
//                 }`}
//               >
//                 <Link className="nav-link" to="/">
//                   Home
                 
//                 </Link>
//               </li>
//               <li
//                 className={`nav-item  ${
//                   props.location.pathname === "/about" ? "active" : ""
//                 }`}
//               >
//                 <Link className="nav-link" to="/about">
//                   About
//                 </Link>
//               </li>
//               <li
//                 className={`nav-item  ${
//                   props.location.pathname === "/contact" ? "active" : ""
//                 }`}
//               >
//                 <Link className="nav-link" to="/contact">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
      
//     </header>
//   );
// }

// export default withRouter(Navigation);

import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    
    <header>
      <div className='header-inner'>
                 <Link className="logo" to="/">
             Ian Mullane.
           </Link>
        <nav>
          <ul>
            <li>
            <Link className="nav-link" to="/">
                   Home
                 
                 </Link>
            </li>
            <li>
            <Link className="nav-link" to="/Work">
                   Work
                 </Link>
            </li>
            <li>
            <Link className="nav-link" to="/contact">
                   Contact
                 </Link>
            </li>
  
            {/* <li className='btn'>
              <a href='/'>Contact</a>
            </li> */}
           
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default withRouter(Navigation);