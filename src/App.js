import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Us from './components/Us/Us';
import Services from './components/Services/Services';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import items from "./arrayItems";
import clients from './arrayClients';
import banners from './arrayBanners';
import ClientsListContainer from './components/ClientsListContainer/ClientsListContainer';
import Map from './components/Map/Map';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner banners={banners} />
      <Us />
      <Services />
      <ItemListContainer items={items} />
      <ClientsListContainer clients={clients} />
      <Map />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
