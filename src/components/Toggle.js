    import React from 'react'

import openBtn from "../img/icon-hamburger.svg";

function Toggle() {

    
  return (
  
        <button
                className="toggle__btn__open"
                
              >
                <img src={openBtn} alt="open button" />
              </button>

  )
}

export default Toggle