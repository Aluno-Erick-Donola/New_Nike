'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Product from '@/components/Product';
import Story from '@/components/Story';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import MouseFollower from '@/components/MouseFollower';

export default function Home() {
  return (
    <>
      <MouseFollower />
      <Header />
      <Hero />
      <Benefits />
      <Product />
      <Story />
      <Testimonials />
      <ContactForm />
      <CTA />
      <Footer />
    </>
  );
}
