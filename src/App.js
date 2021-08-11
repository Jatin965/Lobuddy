import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Nav/Header";
import Home from "./pages/Home.js";
import Footer from "./components/Nav/Footer";
import How from "./pages/How";

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
        </main>

        <Footer />
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
