import React from 'react'
import HeroSection from './_components/HeroSection';
import FaqsComponent from './_components/FaqsComponent';

function FaqsPage() {
  return (
    <main className='overflow-x-clip text-dark'>
        <HeroSection />
        <FaqsComponent />
    </main>
  )
}

export default FaqsPage;