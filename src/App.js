import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TopNav from "./components/TopNav/TopNav";
import Slider from "./components/Slider/Slider";
import { Products } from "./components/Product/Products";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ height: "51px" }}></div>
      <TopNav />
      <Slider />

      {/* to-do */}
      <div style={{ background: "white" }}>Categories</div>
      {/*  */}

      <Products />
    </div>
  );
}

export default App;
