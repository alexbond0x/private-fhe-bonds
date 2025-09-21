import BondCard from "./BondCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Shield } from "lucide-react";

const TradingDashboard = () => {
  const bonds = [
    {
      issuer: "US Treasury",
      maturity: "2034-12-15",
      yield: "3.25%",
      price: "$98.50",
      rating: "AAA",
      encrypted: false
    },
    {
      issuer: "Corporate Bond Alpha",
      maturity: "2029-06-30",
      yield: "4.15%",
      price: "$102.25",
      rating: "A+",
      encrypted: true
    },
    {
      issuer: "Municipal Series B",
      maturity: "2031-09-15",
      yield: "3.85%",
      price: "$99.75",
      rating: "AA",
      encrypted: true
    },
    {
      issuer: "Green Energy Fund",
      maturity: "2028-03-20",
      yield: "4.50%",
      price: "$101.80",
      rating: "A",
      encrypted: true
    }
  ];

  const stats = [
    {
      title: "Total Portfolio Value",
      value: "$2,847,392",
      change: "+2.3%",
      trend: "up",
      icon: DollarSign
    },
    {
      title: "Average Yield",
      value: "3.94%",
      change: "+0.12%",
      trend: "up",
      icon: TrendingUp
    },
    {
      title: "Encrypted Holdings",
      value: "75%",
      change: "Private",
      trend: "neutral",
      icon: Shield
    }
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Portfolio Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-muted/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-1 text-xs">
                {stat.trend === "up" && <TrendingUp className="h-3 w-3 text-financial-yield" />}
                {stat.trend === "down" && <TrendingDown className="h-3 w-3 text-destructive" />}
                <span className={`${
                  stat.trend === "up" ? "text-financial-yield" : 
                  stat.trend === "down" ? "text-destructive" : "text-muted-foreground"
                }`}>
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bond Market */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">Available Bonds</h2>
          <p className="text-muted-foreground">
            Encrypted real-world asset bonds with regulatory compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {bonds.map((bond, index) => (
            <BondCard key={index} {...bond} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingDashboard;