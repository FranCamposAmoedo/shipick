import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Us from "./components/Us/Us";
import Services from "./components/Services/Services";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { clients, banners } from "./arrayClients";
import ClientsListContainer from "./components/ClientsListContainer/ClientsListContainer";
import Map from "./components/Map/Map";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);

  const estado = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  useEffect(() => {
    estado();
  }, []);

  if (loading) {
    return (
      <div className="shipick-loader">
        <div className="loader">Loading...</div>
      </div>
    )
  }
  return (
    <div className="App">
      <Header />
      <Banner banners={banners} />
      <Us />
      <Services /> 
      <ItemListContainer /> 
      <ClientsListContainer clients={clients} /> 
      <Map /> 
      <Form />
      <Footer />
    </div>
  );
};

export default App;
