import Faqs from '@/components/home-constant/faqs';
import HeroSection from './_components/HeroSection';
import NeedHelp from '@/components/home-constant/NeedHelp';
import FindAnswers from './_components/FindAnswers';

function HelpPage() {
  return (
    <>
        <HeroSection />
        <FindAnswers />
        <NeedHelp />
        <Faqs />
    </>
  )
}

export default HelpPage;