import { CardContent, CardHeader, Card as CardRoot, CardTitle } from "~~/components/ui/card";

interface CardProps {
  cards: {
    title: string;
    value: string;
    subtext: string;
    className: string;
  }[];
}

export function Card({ cards }: CardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch justify-center w-full gap-4 px-2 sm:px-0">
      {cards.map((card, index) => {
        const bgClass = card.className === "green" ? "bg-green-500" : "bg-blue-500";

        return (
          <CardRoot key={index} className="w-full sm:w-[300px] relative">
            <CardHeader>
              <CardTitle className="text-base !font-normal">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground my-0">{card.subtext}</p>
            </CardContent>
          </CardRoot>
        );
      })}
    </div>
  );
}
