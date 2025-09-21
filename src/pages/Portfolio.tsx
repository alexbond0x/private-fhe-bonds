import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, Shield } from "lucide-react";

const Portfolio = () => {
  const portfolioData = [
    {
      id: "BOND001",
      issuer: "████████",
      amount: 50000,
      rate: "████%",
      maturity: "2026-12-15",
      value: 52500,
      change: 2500,
      status: "Active"
    },
    {
      id: "BOND002", 
      issuer: "████████",
      amount: 25000,
      rate: "████%",
      maturity: "2025-08-30",
      value: 24800,
      change: -200,
      status: "Active"
    },
    {
      id: "BOND003",
      issuer: "████████", 
      amount: 75000,
      rate: "████%",
      maturity: "2027-03-22",
      value: 78200,
      change: 3200,
      status: "Active"
    }
  ];

  const totalValue = portfolioData.reduce((sum, bond) => sum + bond.value, 0);
  const totalChange = portfolioData.reduce((sum, bond) => sum + bond.change, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio Overview</h1>
          <p className="text-muted-foreground">Your encrypted bond holdings with private valuations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Encrypted valuation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total P&L</CardTitle>
              {totalChange >= 0 ? (
                <TrendingUp className="h-4 w-4 text-financial-growth" />
              ) : (
                <TrendingDown className="h-4 w-4 text-financial-decline" />
              )}
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${totalChange >= 0 ? 'text-financial-growth' : 'text-financial-decline'}`}>
                {totalChange >= 0 ? '+' : ''}${totalChange.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {((totalChange / (totalValue - totalChange)) * 100).toFixed(2)}% return
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
              <Shield className="h-4 w-4 text-financial-encrypted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{portfolioData.length}</div>
              <p className="text-xs text-muted-foreground">Encrypted bonds</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Bond Holdings</CardTitle>
            <CardDescription>
              Your encrypted bond positions with regulatory-only visibility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {portfolioData.map((bond) => (
                <div key={bond.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-medium">{bond.id}</h3>
                      <Badge variant="secondary">{bond.status}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="block">Issuer</span>
                        <span className="font-mono text-financial-encrypted">{bond.issuer}</span>
                      </div>
                      <div>
                        <span className="block">Rate</span>
                        <span className="font-mono text-financial-encrypted">{bond.rate}</span>
                      </div>
                      <div>
                        <span className="block">Principal</span>
                        <span>${bond.amount.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="block">Maturity</span>
                        <span>{bond.maturity}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium">${bond.value.toLocaleString()}</div>
                    <div className={`text-sm ${bond.change >= 0 ? 'text-financial-growth' : 'text-financial-decline'}`}>
                      {bond.change >= 0 ? '+' : ''}${bond.change.toLocaleString()}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;