import Header from "@/components/Header";
import TradingDashboard from "@/components/TradingDashboard";
import Footer from "@/components/Footer";

const Markets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TradingDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Markets;