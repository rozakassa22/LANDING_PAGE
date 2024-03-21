import Feature from "@/components/Feature";
import Pricing from "@/components/Pricing";
import Hero from "@/components/Hero";
import Layout from "@/components/layout/Layout";
import SeoHead from "@/components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Cinema Booking' />
      <Layout>
        <div className="bg-black" >
          <Hero />
        <Feature />
        <Pricing />
        </div>
        
      </Layout>
    </>
  );
}