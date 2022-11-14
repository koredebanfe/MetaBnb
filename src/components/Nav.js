import React from 'react';
import { NavLink } from 'react-router-dom';
import headerlogo from '../img/headerlogo.png';

function Nav(){
    return(
        <nav>
            <div>
                <img src={headerlogo}
                alt='Meta logo'
                />
            </div>

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/placetostay'>PlaceToStay</NavLink>

            <div>
               <button>NFTS</button>
               <button>Comunity</button>
            </div>

           
        </nav>
    )
}

export default Nav