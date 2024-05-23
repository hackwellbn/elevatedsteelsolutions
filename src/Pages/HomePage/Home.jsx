import React from "react";
import Hero from "./Layouts/Hero/hero";
import Services from "./Layouts/Services/Services";
import Testimonials from "./Layouts/Testimonials/Testimonials";
import Categories from "./Layouts/Categories/Categories";
import Choice from "./Layouts/Choice/Choice";
import Counter from "./Layouts/Counter/Counter";
import Process from "./Layouts/Process/Process";
import Faq from "./Layouts/Faq/Faq";
import NewsletterSignup from "./Layouts/NewsLetterSignup/NewsletterSignup";
import Partners from "./Layouts/Partners/Partners";

const Home = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <Categories />
      <Services />
      <Choice />
      <Process />
      <Faq />
      <NewsletterSignup />
      <Testimonials />
      <Partners />
    </div>
  );
};

export default Home;
