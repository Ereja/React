import "./App.css";
import { GlobalContextProvider } from "./components/GlobalContext";
import Header from "./components/Header";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <>
      <Header title="Hack Your Weather" />
      <GlobalContextProvider>
        <Routes />
      </GlobalContextProvider>
    </>
  );
};

export default App;
