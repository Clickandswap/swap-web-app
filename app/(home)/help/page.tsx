import Faqs from '@/components/home-constant/faqs';
import HeroSection from './_components/HeroSection';
import NeedHelp from '@/components/home-constant/NeedHelp';
import FindAnswers from './_components/FindAnswers';

function HelpPage() {
  return (
    <main className='overflow-hidden'>
        <HeroSection />
        <FindAnswers />
        <NeedHelp />
        <Faqs />
    </main>
  )
}

export default HelpPage;