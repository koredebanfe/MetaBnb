import React from "react";
import styled from "styled-components";
import placeToStayImg1 from "../img/homeimg5_stayimg1.png";
import placeToStayImg2 from "../img/homeimg6_stayimg2.png";
import placeToStayImg3 from "../img/homeimg7_stayimg3.png";
import placeToStayImg4 from "../img/homeimg8_stayimg4.png";
import placeToStayImg5 from "../img/homeImg1_stayimg5.svg";
import placeToStayImg6 from "../img/homeimg2_stayimg6.png";
import placeToStayImg7 from "../img/homeimg3_stayimg7.png";
import placeToStayImg8 from "../img/homeimg4_stayimg8.png";
import placeToStayImg9 from "../img/stayimg9.png";
import placeToStayImg10 from "../img/stayimg10.png";
import placeToStayImg11 from "../img/stayimg11.png";
import placeToStayImg12 from "../img/stayimg12.png";
import placeToStayImg13 from "../img/stayimg13.png";
import placeToStayImg14 from "../img/stayimg14.png";
import placeToStayImg15 from "../img/stayimg15.png";
import placeToStayImg16 from "../img/stayimg16.png";
import ratestars from "../img/ratestars.png";

const PlaceToStayNftStyles = styled.section`
article > div {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
  }

  article h5:last-child {
    text-align: right;
  }

  #location__section__result {
    border: 1px solid #d7d7d7;
    border-radius: 15px;
    margin: 0 auto;
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    max-width: max-content;
    font-size: 0.8rem img {
      display: inline-block;
      margin-right: -0.5em;
    }

    p {
      font-size: 0.8em;
      margin-top: 1em;
    }
  }

  @media screen and (max-width: 991px) and (min-width: 600px) {
    padding-left: 3rem;
padding-right: 3rem;
    #location__section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
      column-gap: 10px;
    }
  }

  @media screen and (min-width: 992px) {
    padding-left: 3rem;
padding-right: 3rem;
    #location__section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      column-gap: 10px;

    }
  }
`

function PlaceToStayNft() {
  return (
    <PlaceToStayNftStyles>
      <section id='location__section'>
        <article id="location__section__result">
          <img src={placeToStayImg1} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg2} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg3} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg4} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg5} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg6} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg7} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg8} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg9} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg10} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg11} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg12} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg13} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg14} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg15} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>

        <article id="location__section__result">
          <img src={placeToStayImg16} alt="illustration" />
          <div>
            <div>
              <h5>Desert King</h5>
              <p>2345km away</p>
              <img src={ratestars} alt="rating" />
            </div>

            <div>
              <h5>
                <span>IMBT</span> per night
              </h5>
              <p>available for 2weeks stay</p>
            </div>
          </div>
        </article>
      </section>
    </PlaceToStayNftStyles>
  );
}

export default PlaceToStayNft;
