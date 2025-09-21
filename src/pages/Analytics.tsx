import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InterestRateCurve from "@/components/InterestRateCurve";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Activity, PieChart as PieChartIcon, BarChart3 } from "lucide-react";

const Analytics = () => {
  const performanceData = [
    { month: "Jan", portfolio: 98500, benchmark: 97800 },
    { month: "Feb", portfolio: 99200, benchmark: 98100 },
    { month: "Mar", portfolio: 101800, benchmark: 99500 },
    { month: "Apr", portfolio: 103200, benchmark: 100200 },
    { month: "May", portfolio: 105600, benchmark: 101800 },
    { month: "Jun", portfolio: 108400, benchmark: 103200 }
  ];

  const riskMetrics = [
    { metric: "Duration Risk", value: 4.2, category: "Medium" },
    { metric: "Credit Risk", value: 2.8, category: "Low" },
    { metric: "Liquidity Risk", value: 3.5, category: "Medium" },
    { metric: "Interest Rate Risk", value: 5.1, category: "High" }
  ];

  const sectorAllocation = [
    { name: "Government", value: 35, color: "hsl(var(--financial-primary))" },
    { name: "Corporate", value: 45, color: "hsl(var(--financial-encrypted))" },
    { name: "Municipal", value: 15, color: "hsl(var(--financial-growth))" },
    { name: "Structured", value: 5, color: "hsl(var(--financial-decline))" }
  ];

  const yieldAnalysis = [
    { rating: "AAA", yield: 3.2, count: 5 },
    { rating: "AA", yield: 3.8, count: 8 },
    { rating: "A", yield: 4.5, count: 12 },
    { rating: "BBB", yield: 5.2, count: 7 },
    { rating: "BB", yield: 6.8, count: 3 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Advanced analytics for encrypted bond portfolios</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Portfolio Beta</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.85</div>
              <p className="text-xs text-muted-foreground">vs Bond Index</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sharpe Ratio</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.42</div>
              <p className="text-xs text-muted-foreground">Risk-adjusted return</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Duration</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2 Years</div>
              <p className="text-xs text-muted-foreground">Weighted average</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Yield to Maturity</CardTitle>
              <PieChartIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">████%</div>
              <p className="text-xs text-muted-foreground">Encrypted rate</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
            <TabsTrigger value="yield">Yield Curve</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance vs Benchmark</CardTitle>
                <CardDescription>6-month performance comparison with bond market index</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="portfolio" stroke="hsl(var(--financial-growth))" strokeWidth={2} name="Portfolio" />
                    <Line type="monotone" dataKey="benchmark" stroke="hsl(var(--muted-foreground))" strokeWidth={2} strokeDasharray="5 5" name="Benchmark" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Risk Metrics</CardTitle>
                <CardDescription>Portfolio risk assessment across key dimensions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskMetrics.map((risk) => (
                    <div key={risk.metric} className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <h4 className="font-medium">{risk.metric}</h4>
                        <p className="text-sm text-muted-foreground">Risk Level: {risk.category}</p>
                      </div>
                      <div className="text-xl font-bold">{risk.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allocation" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sector Allocation</CardTitle>
                  <CardDescription>Portfolio distribution by bond sectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={sectorAllocation}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {sectorAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Credit Rating Distribution</CardTitle>
                  <CardDescription>Holdings by credit rating and yield</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={yieldAnalysis}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="rating" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="yield" fill="hsl(var(--financial-primary))" name="Yield %" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="yield" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Interest Rate Environment</CardTitle>
                <CardDescription>Current yield curve and market conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <InterestRateCurve />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;