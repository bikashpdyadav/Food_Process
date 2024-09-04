import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import NavigateSection from './NavigateSection';
import Dashboard from './Dashboard';

const HomePage = () => {
  return (
    <div className="relative">
      <Header />
      <div className="pt-24">
        <HeroSection />
        <NavigateSection />
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

