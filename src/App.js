import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import Us from './components/Us/Us';
import Services from './components/Services/Services';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import items from "./arrayItems";
import clients from './arrayClients';
import ClientsListContainer from './components/ClientsListContainer/ClientsListContainer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Banner />
      <Us />
      <Services />
      <ItemListContainer items={items} />
      <ClientsListContainer clients={clients} />
    </div>
  );
}

export default App;
