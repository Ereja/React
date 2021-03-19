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

export default App;
