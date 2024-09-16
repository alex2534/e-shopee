import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { NotFound } from "./components/error/NotFound";
import CartSearch from "./components/car/search/CartSearch";
import CarCheckout from "./components/car/chekout/CartCheckout";
import CartDetails from "./components/car/detail/CartDetails";

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
        <Route path="/cartdetails/:id" element={<CartDetails />} />
        <Route path="/carcheckout/:id" element={<CarCheckout />} />

        {/* <Route path="*" element={<NotFound />} /> 404 Page */}
      </Routes>
    </Router>
  );
}

export default App;
