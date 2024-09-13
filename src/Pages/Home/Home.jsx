import React from 'react'
import Hero from './_Layouts/Hero/Hero'
import ContactForm from './_Layouts/ContactForm/ContactForm'
import Testimonials from './_Layouts/Testimonials/Testimonials'
const Home = () => {
  return (
    <div>
        <Hero />
        <Testimonials />
        <ContactForm />
    </div>
  )
}

export default Home