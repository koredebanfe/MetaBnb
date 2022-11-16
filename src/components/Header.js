
import React from 'react';
import styled from 'styled-components'
import homeheadimg1 from '../img/homeheadimg1.png';
import homeheadimg2 from '../img/homeheadimg2.png';
import homeheadimg3 from '../img/homeheadimg3.png';
import homeheadimg4 from '../img/homeheadimg4.png';


const HeaderStyles = styled.header`
    text-align: center;
    h1 {
		font-size: 3rem;
		margin-bottom: 2rem;
	}

	p{
		font-weight: 400;
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
		line-height: 2rem;
	}

	.home__image{
		display: flex;
		max-width: 70vw;
		margin: 0 auto;
		margin-top: 4rem;
		
	}

	.item1 {
		margin-top: 3rem;
		margin-right: 1rem;
	}

    
	span {
		color: #A02279;
	}

	.home__image {
		display: flex;
	}

	form {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	input {
		padding: 0.5rem 1rem;
		outline: none;
	}

	button {
		background-color: #A02279;
		color: whitesmoke;
		padding: 0.6rem 1rem;
		font-size: 1rem;
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
			max-width: 50vw;
			align-self: center;
		}

		.home__image{
			align-self: center;
		}
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
					
					 <label htmlFor='location'>
					 <input type='search' id='location' name='location' 
					 placeholder='Search for location'/>
					 </label>
					 <button>Search</button>
				</form>
			</article>

			<div className='home__image'>
				<div className='item1'>
					<img src={homeheadimg1} alt='illustration' />
					<img src={homeheadimg3} alt='illustration' />
				</div>
				<div className='item2'>
				    <img src={homeheadimg2} alt='illustration' />
				    <img src={homeheadimg4} alt='illustration' />
				</div>
				
				
			</div>
		</section>
    </header>
	</HeaderStyles>
  )
}

export default Header


