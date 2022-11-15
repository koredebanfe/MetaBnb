import React from "react";
import footerlogo from "../img/footerlogo.svg";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import twitter from "../img/twitter.png";
import styled from "styled-components";

const FooterStyles = styled.footer`
  background-color: black;
  color: #f1f3f9;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  button {
    border: none;
    background-color: black;
    display: block;
    margin-top: 1em;
    color: #f1f3f9;
    font-size: 0.8em;
    font-weight: 400;
    text-transform: capitalize;
    cursor: pointer;
  }

  h3 {
    font-weight: 700;
    font-size: 1.4em;
    margin: 1.2em 0;
  }

  .footer__links__social {
    margin-top: 3em;

    img {
      margin-right: 1.2em;
    }
  }

  p {
    margin-top: 2em;
    font-weight: 400;
  }

  @media screen and (max-width: 600px) {
	button {
		margin: 0 auto;
		margin-top: 1em;
	}
  }

  @media screen and (max-width: 991px) and (min-width: 600px) {
    padding-left: 3rem;
padding-right: 3rem;
	text-align: left;
    .footer__links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    }
  }

  @media screen and (min-width: 992px) {
    padding-left: 3rem;
padding-right: 3rem;
	text-align: left;
    .footer__links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    }
  }
`

function Footer() {
  return (
    <FooterStyles>
      <footer className="footer">
        <div className="footer__links">
          <div>
            <img src={footerlogo} alt="metabnb logo" />
            <div className="footer__links__social">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>

          <div className="footer__links__community">
            <h3>Community</h3>

            <div>
              <button>nft</button>
              <button>tokens</button>
              <button>landlords</button>
              <button>discord</button>
            </div>
          </div>

          <div className="footer__links__places">
            <h3>Places</h3>

            <div>
              <button>castle</button>
              <button>farms</button>
              <button>beach</button>
              <button>laern more</button>
            </div>
          </div>

          <div className="footer__links__about">
            <h3>About us</h3>

            <div>
              <button>road map</button>
              <button>creators</button>
              <button>career</button>
              <button>contact us</button>
            </div>
          </div>
        </div>

        <p> &#169; 2022 Metabnb</p>
      </footer>
    </FooterStyles>
  );
}

export default Footer;
