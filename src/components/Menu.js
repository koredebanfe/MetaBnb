import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import headerlogo from "../img/headerlogo.png";



const NavStyles = styled.nav`
  margin-top: 2rem;
  margin-bottom: 3rem;

  a,
  button {
    text-decoration: none;
    color: black;
    display: block;
    padding-bottom: 0.5rem;
    margin-top: 0.7rem;
    max-width: max-content;
    font-size: 1.2rem;
  }

  .toggle {
    display: flex;
    justify-content: space-between;
  }

  .connect {
    background-color: #a02279;
    color: white;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 10px;
  }

  .active {
    border-bottom: 2px solid #a02279;
  }


  @media screen and (min-width: 760px) {
    padding-left: 3rem;
    padding-right: 3rem;
    .toggle__btn {
      display: none;
    }

    button,
    a {
      display: inline-block;
    }

    .other__links {
      vertical-align: center;
      margin-right: 1rem;
      margin-top: 0.5rem;
    }

    nav {
      display: flex;
      justify-content: space-between;
    }

    .nav__content {
      display: flex;
      max-width: 50vw;
      justify-content: space-around;
    }
  }
`;


function Menu({handleNavToggle}) {
  
  return (
    <div>
      <NavStyles>
        <nav>
          <div className="toggle">
            <div>
              <img src={headerlogo} alt="Meta logo" />
            </div>

            
          </div>

          <div className="nav__content">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/placetostay">Place To Stay</NavLink>

            <div className="other__links">
              <button>NFTS</button>
              <button>Community</button>
            </div>
          </div>
        </nav>
      </NavStyles>
    </div>
  )
}

export default Menu