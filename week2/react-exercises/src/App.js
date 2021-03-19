import "./App.css";
import Friend from "./components/1-friends/Friend";
import DogGallery from "./components/2-dogs/DogGallery";
import RandomJoke from "./components/3-jokes/RandomJoke";

const App = () => {
  return (
    <div className="container">
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
};

export default App;
