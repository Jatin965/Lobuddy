import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop";

import Header from "./components/Nav/Header";
import Footer from "./components/Nav/Footer";
import Home from "./pages/Home.js";
import How from "./pages/How";
import Best from "./pages/Best";
import Product from "./pages/ProductDetail";
import Search from "./pages/Search";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Explore from "./pages/Explore";
import Trends from "./pages/Trends";
import Faq from "./components/UI/Faq";

function App() {
  const [view, setView] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header vs={setView} />

        {!view && (
          <main>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/search">
              <Search />
            </Route>

            <Route path="/explore">
              <Explore />
            </Route>

            <Route path="/terms-and-conditions">
              <Terms />
            </Route>

            <Route path="/privacy-policy">
              <Privacy />
            </Route>

            <Route path="/how">
              <How />
            </Route>

            <Route path="/trends">
              <Trends />
            </Route>

            <Route path="/best-deals">
              <Best />
            </Route>

            <Route path="/faq">
              <Faq />
            </Route>

            <Route path="/product/:id">
              <Product />
            </Route>
          </main>
        )}

        {!view && <Footer />}
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
