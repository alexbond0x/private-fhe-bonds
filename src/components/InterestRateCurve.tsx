import { useEffect, useRef } from "react";

const InterestRateCurve = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Generate curve points for different maturities
  const generateCurvePoints = () => {
    const points = [];
    const maturities = [1, 2, 5, 10, 20, 30];
    const baseRates = [2.1, 2.3, 2.8, 3.2, 3.5, 3.4];
    
    for (let i = 0; i < maturities.length; i++) {
      const x = (i / (maturities.length - 1)) * 300;
      const y = 80 - (baseRates[i] / 4) * 60; // Scale to fit SVG
      points.push(`${x},${y}`);
    }
    
    return points.join(" ");
  };

  return (
    <div className="w-full h-24 bg-gradient-to-r from-muted/30 to-accent/30 rounded-lg p-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
        <span>Interest Rate Curve</span>
        <span className="flex items-center space-x-4">
          <span>1Y: 2.1%</span>
          <span>5Y: 2.8%</span>
          <span>10Y: 3.2%</span>
          <span>30Y: 3.4%</span>
        </span>
      </div>
      
      <svg ref={svgRef} width="100%" height="60" className="overflow-visible">
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--bond-yield))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--bond-price))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--encrypted))" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Animated curve */}
        <polyline
          points={generateCurvePoints()}
          fill="none"
          stroke="url(#curveGradient)"
          strokeWidth="2"
          className="animate-curve-flow"
        />
        
        {/* Data points */}
        {[1, 2, 5, 10, 20, 30].map((maturity, index) => (
          <circle
            key={maturity}
            cx={(index / 5) * 300}
            cy={80 - ([2.1, 2.3, 2.8, 3.2, 3.5, 3.4][index] / 4) * 60}
            r="3"
            fill="hsl(var(--bond-yield))"
            className="animate-data-pulse"
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default InterestRateCurve;