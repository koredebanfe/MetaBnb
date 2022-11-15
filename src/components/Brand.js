import React from "react";
import styled from "styled-components";
import mbtoken from "../img/mbtoken.png";
import metamask from "../img/metamask.png";
import openseas from "../img/openseas.png";

const BrandStyles = styled.section`
  background-color: #a02279;
  padding: 2rem 3rem;
  

  img {
    max-width: 100%;
    height: auto;
  }
  `


function Brand() {
  return (
    <BrandStyles>
      <section>
        <div>
          <img src={mbtoken} alt="mbtoken" />
        </div>

        <div>
          <img src={metamask} alt="metamask" />
        </div>

        <div>
          <img src={openseas} alt="openseas" />
        </div>
      </section>
    </BrandStyles>
  );
}

export default Brand;
