
import React from 'react';
import styled from 'styled-components'
import homeheadimg1 from '../img/homeheadimg1.png';
import homeheadimg2 from '../img/homeheadimg2.png';
import homeheadimg3 from '../img/homeheadimg3.png';
import homeheadimg4 from '../img/homeheadimg4.png';
import mbtoken from '../img/mbtokenimg.svg';
import metamask from '../img/metamaskimg.svg';
import opensea from '../img/opensea.svg';


const HeaderStyles = styled.header`
    h1 {
		font-size: 3em;
		padding: 2em;
	}

	p{
		font-weight: 400;
		font-size: 1.5em;
		line-height: 1.5em;
	}

	img{
		display: block;
		max-width: 20vw;
		margin-top: 1em;
	}

    div #brand__sponsor {
		background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
	}

	span {
		color: #A02279;
	}

	.home__image {
		display: flex;
	}

	form {
		margin-top: 1em;
		margin-bottom: 1em;
	}

	input {
		padding: 0.5em 1em;
	}

	label {
		background-color: #A02279;
		color: whitesmoke;
	}
`

function Header() {
  return (
    <HeaderStyles>
		<header>

		<section>

			<article>
				<h1>
					Rent a <span>Place</span> away from <span>Home</span> in 
					the <span>Metaverse</span>
				</h1>

				<p>
					We provide you access to luxury and a affordable houses
					in the metaverse, get a chance to turn your imagination to
					reality at your comfort zone
				</p>

				<form name='searchLocation'>
					<input type='search' id='location' name='location' 
					 placeholder='Search for location'/>
					 <label htmlFor='location'>Search</label>
				</form>
			</article>

			<div className='home__image'>
				<div>
					<img src={homeheadimg1} alt='illustration' />
					<img src={homeheadimg3} alt='illustration' />
				</div>
				<div>
				    <img src={homeheadimg2} alt='illustration' />
				
				    <img src={homeheadimg4} alt='illustration' />
				</div>
				
				
			</div>
		</section>

		<div id='brand__sponsor'>
			<img src={mbtoken} alt='mbtoken logo'/>
			<img src={metamask} alt='metamask logo'/>
			<img src={opensea} alt='opensea logo'/>
		</div>

    </header>
	</HeaderStyles>
  )
}

export default Header


