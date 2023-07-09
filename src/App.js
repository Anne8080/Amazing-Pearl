import React from "react";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/home/Home";
import Regone from "./pages/register/Regone";
import Regthree from "./pages/register/Regthree";
import Regtwof from "./pages/register/Regtwof";
import Regtwos from "./pages/register/Regtwos";
// import "aos/dist/aos.css"
// import aos from "aos"
import Sign from "./pages/sign/Sign";
function App() {
  // aos.init()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
          </Route>
          <Route path="/signup">
            <Route index element={<Sign />}/>
          </Route>
          <Route path="/register">
            <Route path="stepone" element={<Regone />} />
            <Route path="steptwofirst" element={<Regtwof />} />
            <Route path="steptwosecond" element={<Regtwos />} />
            <Route path="stepthree" element={<Regthree />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
