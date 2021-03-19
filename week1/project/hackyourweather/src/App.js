<<<<<<< HEAD
import "./App.css";
import Header from "./components/Header";
import CityCardList from "./components/CityCardList";

const App = () => {
  return (
    <>
      <Header title="Hack Your Weather" />
      <CityCardList />
    </>
  );
};
=======
import React from "react";
import "./App.css";
import Header from "./components/Header"
import CityCard from "./components/cityCard"

function App() {
  return (
    <>
      <Header title="Hack Your Weather"/>
      <CityCard/>
    </>
  );
}
>>>>>>> 4fd67af888d2a7e28e97448a90bd08778e968cde

export default App;
