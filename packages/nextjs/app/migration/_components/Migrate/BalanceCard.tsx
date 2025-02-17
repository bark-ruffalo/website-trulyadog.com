import Image from "next/image";
import { Address } from "~~/components/scaffold-eth";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";

interface BalanceCardProps {
  title: string;
  balance: string;
  tokenAddress?: string;
  onAddToMetamask?: () => void;
}

const BalanceCard = ({ title, balance, tokenAddress, onAddToMetamask }: BalanceCardProps) => {
  return (
    <Card className="h-full bg-card/95 hover:bg-card/100 transition-all duration-200">
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 sm:gap-4">
        <p className="text-2xl sm:text-3xl font-bold">{balance}</p>

        {tokenAddress && (
          <>
            <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span>Token:</span>
                <Address address={tokenAddress} />
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4">
              {onAddToMetamask && (
                <Button onClick={onAddToMetamask} size="sm" className="flex items-center gap-2">
                  <Image src="/metamask-fox.svg" alt="MetaMask" width={20} height={20} className="w-5 sm:w-6" />
                  Add to MetaMask
                </Button>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
