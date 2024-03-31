import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:alpha3Code" element={<CountryDetails />} /> {/* => working with Params*/}
        {/* <Route path="/country" element={<CountryDetails />} /> Working with Query's */}
      </Routes>
    </div>
  );
}

export default App;
