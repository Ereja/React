import "./App.css";
import HobbyList from "./1-hobbies/Hobbies";
import Guarantees from "./2-guarantee/Guarantees";
import Counter from "./3-counter/Counter";

const App = () => {
  return (
    <div className="main-container">
      <HobbyList />
      <Guarantees />
      <Counter />
    </div>
  );
};

export default App;
