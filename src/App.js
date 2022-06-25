import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import Us from './components/Us/Us';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Banner />
      <Us />    
    </div>
  );
}

export default App;
