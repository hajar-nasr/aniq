// data
import homepageGridCollection from "@/app/data/homepage-grid-collection.json";
// components
import CustomerBenefits from "./components/CustomerBenefits";
import GridCollection from "./components/GridCollection";
import MoreProducts from "./components/MoreProducts";
import HomepageHero from "./components/HomepageHero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-15 md:space-y-20">
      <HomepageHero />
      <GridCollection collection={homepageGridCollection} />

      <MoreProducts title="Latest Collection" />
      <CustomerBenefits />
    </div>
  );
}
