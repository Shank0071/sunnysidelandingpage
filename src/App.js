import './App.css';

import Header from './components/Header';
import MainBody from './components/MainBody';
import Testimonials from './components/Testimonials';
import ComponentImage from './components/ComponentImage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Testimonials />
      <ComponentImage />
      <Footer />
    </div>
  );
}

export default App;
