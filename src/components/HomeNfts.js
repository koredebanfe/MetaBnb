import React from 'react'
import styled from 'styled-components'
import homeImg1 from '../img/homeImg1_stayimg5.png';
import homeImg2 from '../img/homeimg2_stayimg6.png';
import homeImg3 from '../img/homeimg3_stayimg7.png';
import homeImg4 from '../img/homeimg4_stayimg8.png';
import homeImg5 from '../img/homeimg5_stayimg1.png';
import homeImg6 from '../img/homeimg6_stayimg2.png';
import homeImg7 from '../img/homeimg7_stayimg3.png';
import homeImg8 from '../img/homeimg8_stayimg4.png';
import ratestars from '../img/ratestars.png';

const HomeNftsStyles = styled.section`
     h3 {
			font-weight: 700;
			font-size: 2em;
			margin-top: 1em;
			margin-bottom: 1em;
		}

		
     #location__section__result {
		border: 1px solid #D7D7D7;
		border-radius: 15px;
		margin: 0 auto;
		margin-bottom: 1em;
		padding-top: 1em;
		max-width: 60vw;


		& > div{
			display: flex;
			justify-content: space-between;
			margin: 1em;
			text-align: left;

			&:last-child {
				text-align: right;
			}
		}

		img {
			display: inline-block;
			margin-right: -0.5em;
		}

		p {
				font-size: 0.8em;
				margin-top: 1em;
		}
	 }
`

function HomeNfts() {
  return (
    <HomeNftsStyles>
		  <section>
        <h3>
            Inspiration for your next adventure
        </h3>

        <section id='location__section'>

			<article id='location__section__result'>
				<img src={homeImg1} alt='illustration' />
				<div>
					<div>
						<h5>
							Desert King
						</h5>
						<p>2345km away</p>
						<img src={ratestars} alt='rating' />
					</div>

					<div>
						<h5>
							<span>IMBT</span> per night
						</h5>
						<p>available for 2weeks stay</p>
					</div>
				</div>
			</article>

			<article id='location__section__result'>
				<img src={homeImg2} alt='illustration' />
				<div>
					<div>
						<h5>
							Desert King
						</h5>
						<p>2345km away</p>
						<img src={ratestars} alt='rating' />
					</div>

					<div>
						<h5>
							<span>IMBT</span> per night
						</h5>
						<p>available for 2weeks stay</p>
					</div>
				</div>
			</article>

			<article id='location__section__result'>
				<img src={homeImg3} alt='illustration' />
				<div>
					<div>
						<h5>
							Desert King
						</h5>
						<p>2345km away</p>
						<img src={ratestars} alt='rating' />
					</div>

					<div>
						<h5>
							<span>IMBT</span> per night
						</h5>
						<p>available for 2weeks stay</p>
					</div>
				</div>
			</article>

			<article id='location__section__result'>
				<img src={homeImg4} alt='illustration' />
				<div>
					<div>
						<h5>
							Desert King
						</h5>
						<p>2345km away</p>
						<img src={ratestars} alt='rating' />
					</div>

					<div>
						<h5>
							<span>IMBT</span> per night
						</h5>
						<p>available for 2weeks stay</p>
					</div>
				</div>
			</article>

			<article id='location__section__result'>
				<img src={homeImg5} alt='illustration' />
				<div>
					<div>
						<h5>
							Desert King
						</h5>
						<p>2345km away</p>
						<img src={ratestars} alt='rating' />
					</div>

					<div>
						<h5>
							<span>IMBT</span> per night
						</h5>
						<p>available for 2weeks stay</p>
					</div>
				</div>
			</article>

			<article id='location__section__result'>
				<img src={homeImg6} alt='illustration' />
				<div>
					<div>
						<h5>
							Desert King
						</h5>
						<p>2345km away</p>
						<img src={ratestars} alt='rating' />
					</div>

					<div>
						<h5>
							<span>IMBT</span> per night
						</h5>
						<p>available for 2weeks stay</p>
					</div>
				</div>
			</article>

			<article id='location__section__result'>
				<img src={homeImg7} alt='illustration' />
				<div>
					<div>
						<h5>
							Desert King
						</h5>
						<p>2345km away</p>
						<img src={ratestars} alt='rating' />
					</div>

					<div>
						<h5>
							<span>IMBT</span> per night
						</h5>
						<p>available for 2weeks stay</p>
					</div>
				</div>
			</article>

			<article id='location__section__result'>
				<img src={homeImg8} alt='illustration' />
				<div>
					<div>
						<h5>
							Desert King
						</h5>
						<p>2345km away</p>
						<img src={ratestars} alt='rating' />
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
    </section>
	</HomeNftsStyles>
  )
}

export default HomeNfts