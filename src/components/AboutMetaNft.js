import React from 'react';
import styled from 'styled-components'
import homenft from '../img/homenft.png';

const AboutMetaNftStyles = styled.section`
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
    border: 1px solid #000000;
    padding: 3em 2em;
    line-height: 2.5em;
    color: #FFFFFF;

    button{
        border-radius: 8px;
        font-size: 1.2em;
        padding: 0.5em 1em;
        color: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
        margin: 0 2em;
    }

    h2 {
        font-weight: 700;
        font-size: 2em;
        margin-bottom: 1em;
    }

    p {
        margin-bottom: 2em;
    }

    img {
        margin-top: 3em;
    }
`

function AboutMetaNft() {
  return (
    <AboutMetaNftStyles>
        <section>

        <article>
            <h2>
                Metabnb NFTS
            </h2>

            <p>
                Discover our NFT gift cards collection. Loyal customers
                gets amazing gift cards which are traded as NFTS. These
                NFTs gives our customer access to loads of our exclusive services.
            </p>

            <button>Learn more</button>
        </article>

        <div>
            <img src={homenft} alt='illustration' />
        </div>

      </section>
    </AboutMetaNftStyles>
  )
}

export default AboutMetaNft