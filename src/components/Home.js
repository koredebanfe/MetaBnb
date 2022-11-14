
import Footer from './Footer';
import Header from './Header';
import AboutMetaNft from './AboutMetaNft';
import HomeNfts from './HomeNfts';
import Nav from './Nav';



function Home() {
  return (
    <div className="App">
        <Nav />
        <Header />
        <HomeNfts />
        <AboutMetaNft />
		    <Footer />
    </div>
  );
}

export default Home;