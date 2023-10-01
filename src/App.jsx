import React from 'react';
import Cards from 'components/Cards/Cards';
import Categories from 'components/Categories/Categories';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import HeroSection from 'components/Hero/HeroSection';
import MobileSection from 'components/MobileSection/MobileSection';
import ClientOnly from 'components/ClientOnly';

function App() {
  return (
    <>
      <ClientOnly>
        <Header/>
        <HeroSection/>
        <Categories/>
        <MobileSection/>
        <Cards/>
        <Footer/>
      </ClientOnly>
    </>
  );
}

export default App;
