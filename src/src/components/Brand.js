import React from "react";
import styled from "styled-components";
import mbtoken from "../img/mbtoken.png";
import metamask from "../img/metamask.png";
import openseas from "../img/openseas.png";

const BrandStyles = styled.section`
  background-color: #a02279;
  padding: 2rem 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  
  display:flex;
  justify-content: space-between;

  img{
    display: inline-block;
    margin-right: 9rem;
  }
  
  `


function Brand() {
  return (
    <BrandStyles>
      <section>

        
          <img src={mbtoken} alt="mbtoken" />
       

      
          <img src={metamask} alt="metamask" />
      

       
          <img src={openseas} alt="openseas" />
       
      </section>
    </BrandStyles>
  );
}

export default Brand;
