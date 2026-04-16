import Card from "./_components/Card";
import HeroSection from "./_components/HeroSection";
import MadeEasy from "./_components/MadeEasy";
import MadeSimple from "./_components/MadeSimple";
import GettingStarted from "@/components/home-constant/getting-started";


function ProductPage() {
  return (
    <>
      <HeroSection />
      <MadeEasy />
      <Card />
      <MadeSimple />
      <GettingStarted />
    </>
  )
}

export default ProductPage;