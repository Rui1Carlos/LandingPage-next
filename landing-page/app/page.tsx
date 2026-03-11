import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Benefits from '@/components/Benefits';
import BigPicture from '@/components/BigPicture';
import Specifications from '@/components/Specifications';
import ComparisonTable from '@/components/ComparisonTable';
import HowItWorks from '@/components/HowItWorks';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';
import '../styles/styly.css';

export default function Home() {
  return (
    <div className="tudo">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <br />
        <Benefits />
        <br /><br /><br /><br /><br />
        <BigPicture />
        <Specifications />
        <ComparisonTable />
        <br /><br />
        <HowItWorks />
        <br /><br />
        <div className="img_hero">
          <img id="img_hero" src="/assets/Image (3).png" alt="Success" />
        </div>
        <br /><br /><br />
        <Connect />
      </main>
      <br /><br /><br /><br />
      <Footer />
    </div>
  );
}