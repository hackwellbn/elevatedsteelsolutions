import React from "react";
import Hero from "./Layouts/Hero/hero";
import Services from "./Layouts/Services/Services";
import Testimonials from "./Layouts/Testimonials/Testimonials";
import Categories from "./Layouts/Categories/Categories";
import Choice from "./Layouts/Choice/Choice";
import Counter from "./Layouts/Counter/Counter";
import Process from "./Layouts/Process/Process";

const Home = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <Categories />
      <Services />
      <Choice />
      <Process />
      <Testimonials />
    </div>
  );
};

export default Home;
