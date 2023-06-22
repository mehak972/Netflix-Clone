import React, { useEffect,useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show,handleShow]=useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else {
            handleShow(false);
          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
      className='nav_logo'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427"
      alt="Netflix Logo"
      />

    <img
    className='nav_avatar'
    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
    alt="Netflix logo"
    />
    </div>
  )
}

export default Nav;
