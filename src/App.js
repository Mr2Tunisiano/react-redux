import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Cart from "./components/cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
