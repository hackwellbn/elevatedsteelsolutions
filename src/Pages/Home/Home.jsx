import React from "react";
import Hero from "./_Layouts/Hero/Hero";
import ContactForm from "./_Layouts/ContactForm/ContactForm";
import Testimonials from "./_Layouts/Testimonials/Testimonials";
import Process from "./_Layouts/Process/Process";
import Services from "./_Layouts/Services/Services";
import Counter from "./_Layouts/Counter/Counter";
const Home = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <Services />
      <Process />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
