import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Modal from "react-modal";
import headerlogo from "../img/headerlogo.png";
import metamask from "../img/placemetamask.png";
import walletconnect from "../img/walletconnect.png";
import arrow from "../img/arrow.png";
import closeBtn from "../img/icon-close.svg";
import openBtn from "../img/icon-hamburger.svg";

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

  padding-left: 3rem;
    padding-right: 3rem;

    

  @media screen and (min-width: 760px) {
    padding-left: 3rem;
    padding-right: 3rem;
    .toggle__btn {
      display: none;
    }

    button,
    a {
      display: inline-block;
      margin-right: 2rem;
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

    .nav__content a
     {
      margin-top: 1rem;
    }
  }
`;

const ModalStyles = styled.section`
  .connect {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid grey;
  }

  .connectwith {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border: 1px solid #cfd8dc;
    margin-top: 1rem;
    border-radius: 10px;
  }

  h5 {
    font-size: 1.2rem;
  }
`;
Modal.setAppElement("#root");
function Nav() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  

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

            <button onClick={() => setModalIsOpen(true)} className="connect">
              Connect Wallect
            </button>
          </div>
        </nav>
      </NavStyles>

      <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(64, 64, 64, 0.3)",
          },

          content: {
            backgroundColor: "#FFF",
            padding: "1rem",
            position: "absolute",
            top: "5rem",
           left: "6rem",
            height: "300px",
            maxWidth: "400px",
            borderRadius: "10px",
          },
        }}
      >
        <ModalStyles>
          <section>
            <div className="connect">
              <h3>Connect Wallet</h3>

              <button
                onClick={() => setModalIsOpen(false)}
                className="toggle__btn__close"
              >
                <img src={closeBtn} alt="close button" />
              </button>
            </div>

            <h5>Choose your preferred wallet:</h5>

            <div className="metamask__connect connectwith">
              <img src={metamask} alt="Meta Mask account" />

              <img src={arrow} alt="arrow" />
            </div>

            <div className="wallect__connect connectwith">
              <img src={walletconnect} alt="wallet Connect" />

              <img src={arrow} alt="arrow" />
            </div>
          </section>
        </ModalStyles>
      </Modal>
    </div>
  );
}

export default Nav;
