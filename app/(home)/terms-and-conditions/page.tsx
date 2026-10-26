import React from 'react'
import HeroSection from './_components/HeroSection';
import TermsAndConditionsComponent from './_components/TermsAndConditionsComponent';
import NeedHelp from '@/components/home-constant/NeedHelp';

function TermsAndConditions() {
  return (
    <div className='text-dark'>
        <HeroSection />
        <TermsAndConditionsComponent />
        <NeedHelp />
    </div>
  )
}

export default TermsAndConditions;