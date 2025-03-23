import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from "../src/pages/MainPage.jsx";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";



function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
            <MainPage />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
