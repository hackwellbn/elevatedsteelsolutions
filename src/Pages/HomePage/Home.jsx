import React from "react";
import Hero from "./Layouts/Hero/hero";
import Services from "./Layouts/Services/Services";
import Testimonials from "./Layouts/Testimonials/Testimonials";
import Categories from "./Layouts/Categories/Categories";
import Choice from "./Layouts/Choice/Choice";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Services />
      <Choice />
      <Testimonials />
    </div>
  );
};

export default Home;
