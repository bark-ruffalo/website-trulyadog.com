interface CardProps {
  cards: {
    title: string;
    value: string;
    className: string;
  }[];
}

export function Card({ cards }: CardProps) {
  return (
    <div className="flex items-center justify-start w-full flex-nowrap overflow-x-auto">
      {cards.map((card, index) => {
        const bgClass = card.className === "green" ? "bg-green-500" : "bg-blue-500";

        return (
          <div
            className="flex flex-col justify-between items-start p-6 min-h-[120px] w-[300px] m-2 relative bg-base-200 dark:bg-white dark:bg-opacity-10 rounded-2xl shadow-md flex-shrink-0 sm:w-[350px] md:w-[450px]"
            key={index}
          >
            <div
              className={`absolute inset-0 rounded-2xl z-0 ${bgClass} bg-opacity-10 dark:bg-opacity-20 blur-sm`}
            ></div>
            <div className="relative z-10 text-base-content dark:text-white">
              <div className="text-sm font-semibold uppercase mb-1 leading-4">{card.title}</div>
              <div className="text-2xl font-light leading-4 pt-6">{card.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
