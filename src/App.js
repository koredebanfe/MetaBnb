import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import Home from './components/Home';
import PlaceToStay from './components/PlaceToStay';


const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    button {
      border: none;
    }
`

function App() {
  return (
	<>
	   <GlobalStyle />
	   <Routes>
		    <Route path='/' element={<Home />} />
		    <Route path='placetostay' element={<PlaceToStay />} />
       </Routes>
	</>
    
  );
}

export default App;
