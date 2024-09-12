import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { NotFound } from "./components/error/NotFound";
import CartSearch from "./components/car/search/CartSearch";
import CarCheckout from "./components/car/chekout/CartCheckout";

function App() {
  return (
    <Router>
        <nav>
          <ul>
            {/* <li>
              <Link to="/cartapi">Cart</Link>
            </li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<CartSearch />} />
          <Route path="/carcheckout/:id" element={<CarCheckout />} />
          <Route path="/carcheckout" element={<CarCheckout />} />
           {/* <Route path="*" element={<NotFound />} /> 404 Page */}
        </Routes>
      </Router>
  );
}

export default App;
