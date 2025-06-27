
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestMatches from "@/components/LatestMatches";
import PreviousMatches from "@/components/PreviousMatches";
import LeagueTable from "@/components/LeagueTable";
import OurTeams from "@/components/OurTeams";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Header />
      <HeroSection />
      <LatestMatches />
      <PreviousMatches />
      <LeagueTable />
      <OurTeams />
      <NewsGrid />
      <Footer />
    </div>
  );
};

export default Index;
