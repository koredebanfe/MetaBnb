import React from 'react'
import styled from 'styled-components';
import searchBgImg from '../img/searchBgImg.svg';

const PlaceStyles = styled.section`
line-height: 2;
text-align: center;
padding-bottom: 2rem;

button {
  font-size: 1rem;
  margin-right: 3rem;
  font-weight: 400;
  text-transform: capitalize;
}

[placeholder='Location'] {
  background: url(${searchBgImg});
  background-repeat: no-repeat;
  background-position: right;
  padding: 0.5rem;
  outline: none;
  border: 1px solid #B4B4B4;
}

@media screen and (min-width:760px){
  padding-left:3rem;
  padding-right:3rem;
  text-align: justify;
}
`

function Place() {
  return (
    <PlaceStyles>
      <section>

<button>Resturant</button>
<button>Cottage</button>
<button>Castle</button>
<button>fantast city</button>
<button>beach</button>
<button>Carbins</button>
<button>Off grid</button>
<button>Farm</button>
<input type='search' placeholder='Location' />

</section>
    </PlaceStyles>
    
  )
}

export default Place