
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <header className="z-50 fixed top-13 w-full flex justify-center ">
        <Navbar />
      </header>
      <div>
        <div className="h-screen bg-primary-light flex items-center justify-center">
         <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/home" element={<Hero/>} />
         </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
