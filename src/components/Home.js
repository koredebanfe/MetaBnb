import React from 'react'
import Footer from './Footer';
import Header from './Header';
import AboutMetaNft from './AboutMetaNft';
import HomeNfts from './HomeNfts';
import Nav from './Nav';
import Brand from './Brand';





function Home() {
  return (
    
      <div>
        <Nav />
        <Header />
        <Brand />
        <HomeNfts />
        <AboutMetaNft />
		    <Footer />
      </div>
        
    );
}

export default Home;