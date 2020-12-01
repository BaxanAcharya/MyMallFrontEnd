import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TopNav from "./components/TopNav/TopNav";
import Slider from "./components/Slider/Slider";
function App() {
  return (
    <div className="App">
      <TopNav />
      <NavBar />
      <Slider />
    </div>
  );
}

export default App;
