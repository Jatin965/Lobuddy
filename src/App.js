import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

// import { ThemeProvider, createTheme } from "@material-ui/core";

import Header from "./components/Nav/Header";
import Home from "./pages/Home.js";
import Footer from "./components/Nav/Footer";

// const theme = createTheme({
//   palette: {
//     primary: { main: "#f68a1e" },
//     secondary: { main: "#fff" },
//   },
// });

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
        </main>

        <Footer />
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
