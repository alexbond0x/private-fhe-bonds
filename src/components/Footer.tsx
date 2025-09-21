import InterestRateCurve from "./InterestRateCurve";
import { Shield, Lock, Eye } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interest Rate Curves */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Live Interest Rate Curves</h3>
            <InterestRateCurve />
          </div>

          {/* Platform Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Privacy Features</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-financial-encrypted" />
                <span>Fully Homomorphic Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-financial-encrypted" />
                <span>Encrypted Identity Protection</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-financial-encrypted" />
                <span>Regulatory Transparency</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-financial-encrypted" />
              <span className="font-semibold">BondVault</span>
              <span className="text-primary-foreground/70">- Private Bond Markets</span>
            </div>
            <div className="text-sm text-primary-foreground/70">
              © 2024 BondVault. Encrypted. Compliant. Secure.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;