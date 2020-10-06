import React from 'react' ;
import './Navbar.css'
import topbanner from '../topbanner' ;
import { Link } from 'gatsby';

class Navbar extends React.Component{


openMenu = () =>{

  var navmenu = document.getElementById('navmenu') ;
  var hamburger = document.getElementById('burger') ;
  hamburger.classList.toggle('hamburger-open') ;
  navmenu.classList.toggle('open') ;
}



render(){
    return (
<div>
<topbanner />

      <nav style={{position : 'relative' , zIndex : 99 , top : 0 ,}} className="my-nav">
        <div className="logo-div"><Link to="/">
          
          <img src={require('../../images/logo-main.png')} 
          style={{
            width : '90px'
          }}/>
          
          </Link></div>
        <div className="nav-menu" id="navmenu">
          <ul>
            <li>
              <Link to='/'> Home</Link>
            </li>

            <li>
              <Link to="/about" onClick={this.openMenu}>About</Link>
            </li>

         


            <li>
              <Link to='/bloglist'>Explore </Link>
            </li>


            <li>
              <Link to='/bloglist'>Series</Link>
            </li>

               {/* <li>
              <Link to='/bloglist'>Opinions & Stories</Link>
            </li> */}

            {/* <li>
              <Link to='/bloglist'>Series</Link>
            </li> */}

            <li>
              <Link to='/bloglist'>Get Involved</Link>
            </li>

          
            <li>
            <Link to="/contact">Contact</Link>
            </li>





          </ul>
        </div>

        <div className="hamburger-2" id="burger" onClick={this.openMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      </div>
    );
}

}

export default Navbar ;