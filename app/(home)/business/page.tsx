import React from 'react'
import HeroSection from './_components/HeroSection';
import BuiltSolution from './_components/BuiltSolution';
import FinancePlatform from './_components/FinancePlatform';
import CardWay from './_components/CardWay';
import GetStarted from './_components/GetStarted';
import AccountFunction from './_components/AccountFunction';
import Faqs from '@/components/home-constant/faqs';
import FirstToExperience from '@/components/home-constant/first-to-experience';

function BusinessPage() {
  return (
    <main className='text-dark'>
        <HeroSection />
        <BuiltSolution />
        <FinancePlatform />
        <CardWay />
        <GetStarted />
        <AccountFunction />\
        <Faqs />
        <FirstToExperience />
        
    </main>
  )
}

export default BusinessPage;