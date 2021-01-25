import React, { FunctionComponent }  from 'react';
import '../styles/navbarStyle.css';

type NavbarProps = {
    header: string,
}

const Navbar:FunctionComponent<NavbarProps> = ({ header }) => {
   
    return ( 
        <div className="navbar" data-test="h1">
            <h1>{header}</h1>
        </div>
     );
}
 
export default Navbar;