import React from "react";
import Hero from "./_Layouts/Hero/Hero";
import ContactForm from "./_Layouts/ContactForm/ContactForm";
import Testimonials from "./_Layouts/Testimonials/Testimonials";
import Process from "./_Layouts/Process/Process";
import Services from "./_Layouts/Services/Services";
import Counter from "./_Layouts/Counter/Counter";
import Gallery from "./_Layouts/Gallery/Gallery";
const Home = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
