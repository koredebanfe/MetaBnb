import React from 'react';
import styled from 'styled-components'
import homenft from '../img/homenft.png';

const AboutMetaNftStyles = styled.section`
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
    border: 1px solid #000000;
    line-height: 2.5em;
    text-align: center;
    color: #FFFFFF;

    button{
        border-radius: 8px;
        font-size: 1.2em;
        padding: 0.5rem 1rem;
        color: #A02279;
    }

    h2 {
        font-weight: 700;
        font-size: 3rem;
        margin-bottom: 1rem;
        padding-top: 3rem;
    }

    p {
        margin-bottom: 3rem;
    }

    img {
        margin-top: 3rem;
        margin-bottom: 2rem;
        max-width: 40vw;
    }

    @media screen and (min-width:760px) {
        padding-left: 3rem;
padding-right: 3rem;

		section {
			display: flex;
			text-align: left;
			column-gap: 10vw;
		}

		article{
			max-width: 40vw;
			align-self: center;
		}

		.image__illustration{
			align-self: center;
            max-width: 100%;
		}
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

        <div className='image__illustration'>
            <img src={homenft} alt='illustration' />
        </div>

      </section>
    </AboutMetaNftStyles>
  )
}

export default AboutMetaNft