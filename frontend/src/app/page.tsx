import Banner from "./components/Banner";
import HotProduct from "./components/HotProduct";
import ProductSection from "./components/ProductSection";
import ServiceSection from "./components/ServiceSection";

export default function HomePage() {
  return (
    <main>
              <Banner/> 
      <HotProduct/>
      <ProductSection/>
      <ProductSection/>
      <ProductSection/>
      <ProductSection/>
      <ServiceSection/>
      {/* <ProductTabs/> */}
    </main>
  );
}