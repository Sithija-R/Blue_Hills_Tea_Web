
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Catalog, Contact, Hero } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      
      <div>
        <div className="h-screen bg-primary-light flex items-center justify-center overflow-y-scroll overflow-x-hidden  customScrollBar">
         <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/home" element={<Hero/>} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
         </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
