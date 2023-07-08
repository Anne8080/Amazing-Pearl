import React from "react";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/home/Home";
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
          <Route path="/about">
            <Route index element={<Sign />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
