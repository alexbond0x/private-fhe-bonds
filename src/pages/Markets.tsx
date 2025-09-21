import Header from "@/components/Header";
import BondTrading from "@/components/BondTrading";
import Footer from "@/components/Footer";

const Markets = () => {
  // Contract address - replace with your deployed contract address
  const contractAddress = "0x1234567890123456789012345678901234567890";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Bond Trading Platform</h1>
          <p className="text-muted-foreground">
            Trade bonds with encrypted data using smart contracts
          </p>
        </div>
        <BondTrading contractAddress={contractAddress} />
      </main>
      <Footer />
    </div>
  );
};

export default Markets;