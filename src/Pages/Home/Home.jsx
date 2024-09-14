import React from "react";
import Hero from "./_Layouts/Hero/Hero";
import ContactForm from "./_Layouts/ContactForm/ContactForm";
import Testimonials from "./_Layouts/Testimonials/Testimonials";
import Process from "./_Layouts/Process/Process";
import Services from "./_Layouts/Services/Services";
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
