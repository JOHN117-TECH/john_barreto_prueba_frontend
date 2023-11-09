import Banner from './components/Banner';
import Cards from './components/Cards';
import Inputs from './components/Inputs';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';

function App() {
  return (
    <>
      <div className='ContainerOP'>
        <Header />
        <Banner />
        <Cards />
        <Inputs />
        <Footer />
      </div>
    </>
  );
}

export default App;
