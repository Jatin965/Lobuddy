import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Nav/Header";
import Footer from "./components/Nav/Footer";
import Home from "./pages/Home.js";
import How from "./pages/How";
import Best from "./pages/Best";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
      <BrowserRouter>
        <Header />

        <main>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/how">
            <How />
          </Route>

          <Route path="/best-deals">
            <Best />
          </Route>

          <Route path="/product/:id">
            <Product />
          </Route>
        </main>

        <Footer />
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
