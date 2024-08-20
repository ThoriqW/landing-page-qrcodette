import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/:location/:typefile/:id/:filename" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
