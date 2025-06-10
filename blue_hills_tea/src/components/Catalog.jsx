import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import Catalogue from "./teacatalogue/Catalogue";

const Catalog = () => {
  return (
    <div className=" w-full h-screen ">
      <section className="relative h-screen ">
        <header className="z-50 absolute top-13 w-full flex justify-center">
          <Navbar />
        </header>

        <main className="pt-24 px-10 ">
        <Catalogue />
      </main>
      
      
      <Footer />
      </section>
    </div>
  );
};

export default Catalog;
