import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Api from "./pages/Api";

const App = () => {
  return (
    <div className="App">
      <Router>
      {/* <Header /> */}
        <main>
          <section>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/product" element={<Product />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/productlist" element={<ProductList />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/api" element={<Api />} />
            </Routes>
          </section>
        </main>
      </Router>
    </div>
    // <div className="footer1">
    //   <Footer />
    // </div>
  );
};

export default App;
