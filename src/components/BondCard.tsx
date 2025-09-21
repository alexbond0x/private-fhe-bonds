import { Eye, EyeOff, Lock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface BondCardProps {
  issuer: string;
  maturity: string;
  yield: string;
  price: string;
  rating: string;
  encrypted?: boolean;
}

const BondCard = ({ issuer, maturity, yield: bondYield, price, rating, encrypted = true }: BondCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-accent/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg flex items-center space-x-2">
              {encrypted && !isRevealed ? (
                <span className="text-muted-foreground">█████████</span>
              ) : (
                <span>{issuer}</span>
              )}
              {encrypted && <Lock className="h-4 w-4 text-financial-encrypted" />}
            </CardTitle>
            <p className="text-sm text-muted-foreground">Maturity: {maturity}</p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {rating}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Yield</p>
            <div className="flex items-center space-x-2">
              {encrypted && !isRevealed ? (
                <span className="text-lg font-bold text-muted-foreground">█.██%</span>
              ) : (
                <span className="text-lg font-bold text-financial-yield">{bondYield}</span>
              )}
              <TrendingUp className="h-4 w-4 text-financial-yield" />
            </div>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Price</p>
            <div className="flex items-center space-x-2">
              {encrypted && !isRevealed ? (
                <span className="text-lg font-bold text-muted-foreground">█████</span>
              ) : (
                <span className="text-lg font-bold text-financial-price">{price}</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          {encrypted && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsRevealed(!isRevealed)}
              className="flex items-center space-x-2"
            >
              {isRevealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{isRevealed ? "Hide" : "Reveal"}</span>
            </Button>
          )}
          
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            Purchase Bond
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BondCard;