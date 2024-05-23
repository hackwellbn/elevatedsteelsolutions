import React from "react";
import Hero from "./Layouts/Hero/hero";
import Services from "./Layouts/Services/Services";
import Testimonials from "./Layouts/Testimonials/Testimonials";
import Categories from "./Layouts/Categories/Categories";
import Choice from "./Layouts/Choice/Choice";
import Counter from "./Layouts/Counter/Counter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <Categories />
      <Services />
      <Choice />
      <Testimonials />
    </div>
  );
};

export default Home;
