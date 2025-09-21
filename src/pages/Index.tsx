import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, TrendingUp, Users, Globe } from "lucide-react";
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
              <Shield className="h-16 w-16 text-financial-encrypted mx-auto mb-4" />
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Private Bond Markets with FHE
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Trade tokenized bonds with encrypted issuer and buyer identities. 
                Complete privacy meets regulatory compliance through Fully Homomorphic Encryption.
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose BondVault?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 text-financial-encrypted mb-2" />
                  <CardTitle>Fully Encrypted</CardTitle>
                  <CardDescription>
                    All identities and sensitive data encrypted using FHE technology
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your trading activity, bond holdings, and personal information remain completely private 
                    while still enabling regulatory oversight when required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Eye className="h-8 w-8 text-financial-primary mb-2" />
                  <CardTitle>Regulatory Transparent</CardTitle>
                  <CardDescription>
                    Selective disclosure to authorized regulators only
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Compliance-ready infrastructure that allows regulators to access necessary 
                    information while maintaining trader privacy in all other contexts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-financial-growth mb-2" />
                  <CardTitle>Institutional Grade</CardTitle>
                  <CardDescription>
                    Professional trading tools and market access
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced analytics, real-time pricing, and institutional-quality execution 
                    for sophisticated bond market participants.
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
                <Users className="h-12 w-12 text-financial-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">$2.5B+</h3>
                <p className="text-muted-foreground">Total Volume Traded</p>
              </div>
              <div>
                <Globe className="h-12 w-12 text-financial-encrypted mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">150+</h3>
                <p className="text-muted-foreground">Active Institutional Traders</p>
              </div>
              <div>
                <Shield className="h-12 w-12 text-financial-growth mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">100%</h3>
                <p className="text-muted-foreground">Privacy Guaranteed</p>
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
