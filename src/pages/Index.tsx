import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, Zap, Users, Globe, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 px-6">
          <div className="container mx-auto text-center">
            <div className="mb-8">
              <TrendingUp className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Advanced Bond Trading Platform
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Institutional-grade bond trading with advanced encryption technology. 
                Secure, private, and compliant financial markets for the future.
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/markets">Start Trading</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle>High Performance</CardTitle>
                  <CardDescription>
                    Lightning-fast execution with advanced matching algorithms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Experience sub-millisecond order execution with institutional-grade infrastructure 
                    designed for high-frequency trading and large volume transactions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>
                    Real-time market data and sophisticated analysis tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access comprehensive market intelligence with real-time pricing, 
                    yield curve analysis, and predictive modeling capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Building2 className="h-8 w-8 text-purple-500 mb-2" />
                  <CardTitle>Enterprise Ready</CardTitle>
                  <CardDescription>
                    Built for institutional and professional traders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive risk management, compliance tools, and integration 
                    capabilities for institutional trading operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">$2.5B+</h3>
                <p className="text-muted-foreground">Total Volume Traded</p>
              </div>
              <div>
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">150+</h3>
                <p className="text-muted-foreground">Active Institutional Traders</p>
              </div>
              <div>
                <BarChart3 className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">99.9%</h3>
                <p className="text-muted-foreground">Uptime Guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Trading?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the future of private bond markets with institutional-grade encryption
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="secondary" size="lg">
                <Link to="/markets">Explore Markets</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
