import { TrendingUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import WalletConnect from "./WalletConnect";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-400" />
              <div>
                <h1 className="text-xl font-bold">FHE Bond Exchange</h1>
                <p className="text-sm text-primary-foreground/70">Private Financial Markets</p>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/markets" 
              className={`transition-colors ${
                location.pathname === '/markets' 
                  ? 'text-primary-foreground' 
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              Markets
            </Link>
            <Link 
              to="/portfolio" 
              className={`transition-colors ${
                location.pathname === '/portfolio' 
                  ? 'text-primary-foreground' 
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/analytics" 
              className={`transition-colors ${
                location.pathname === '/analytics' 
                  ? 'text-primary-foreground' 
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              Analytics
            </Link>
          </nav>

          <WalletConnect />
        </div>
      </div>
    </header>
  );
};

export default Header;