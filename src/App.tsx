import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NotFound } from "./components/error/NotFound";
import CartSearch from "./components/car/CartSearch";
 import CarCheckout from "./components/car/CarCheckout";

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/cartapi">Cart</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* <Route path="/" element={<GlassDoorGetAll />} /> */}
          {/* <Route path="/product" element={<RealTimProductSearchAll />} /> */}
          {/* <Route path="/market" element={<MarketGetAll />} /> */}
          {/* <Route path="/images" element={<SearchImagens />} /> */}
          {/* <Route path="/wallmartSearch" element={<WallMartSearch />} />" */}
          <Route path="/cartapi" element={<CartSearch />} />
          {/* <Route path="/carwithdetails/:id" element={<CarWithDetails />} /> */}
          <Route path="/carcheckout/:id" element={<CarCheckout />} />
          {/* <Route path="/cartcards" element={<CarCards data={[]} />} /> */}
          <Route path="*" element={<NotFound />} /> 404 Page
        </Routes>
      </Router>
    </>
  );
}

export default App;
