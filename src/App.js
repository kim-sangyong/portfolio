import './App.css';
import MainPage from "../src/pages/MainPage.jsx";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";

const App = () => {
  return (
      <div className="App">
        <Header />
            <MainPage />
        <Footer />
      </div>
  );
}

export default App;
