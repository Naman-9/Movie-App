import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Favourite from "./components/Favourite";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" exact element={<><Banner/><Movies/></>} />
          <Route path="/favourites" element={<Favourite/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
