import React from 'react'
import ContactForm from '../Home/_Layouts/ContactForm/ContactForm'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <div>
        <Helmet>
            <title>Contact Elevated Steel Solutions</title>
            <meta name="description" content="Contact Elevated Steel Solution for your custom steel construction needs." />
            <meta property="og:title" content="Contact Elevated Steel Solution" />
            <meta property="og:image" content="/og.webp" />
        </Helmet>
        <ContactForm />
    </div>
  )
}

export default Contact