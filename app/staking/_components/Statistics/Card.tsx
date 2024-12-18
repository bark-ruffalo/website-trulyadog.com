interface CardProps {
  cards: {
    title: string;
    value: string;
    className: string;
  }[];
}

export function Card({ cards }: CardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 px-2 sm:px-0">
      {cards.map((card, index) => {
        const bgClass = card.className === "green" ? "bg-green-500" : "bg-blue-500";

        return (
          <div
            className="flex flex-col justify-between items-start p-4 sm:p-6 min-h-[100px] sm:min-h-[120px] w-full sm:w-[300px] relative bg-base-200 dark:bg-white dark:bg-opacity-10 rounded-2xl shadow-md"
            key={index}
          >
            <div
              className={`absolute inset-0 rounded-2xl z-0 ${bgClass} bg-opacity-10 dark:bg-opacity-20 blur-sm`}
            ></div>
            <div className="relative z-10 text-base-content dark:text-white w-full">
              <div className="text-sm font-semibold uppercase mb-1 leading-4 text-center">{card.title}</div>
              <div
                className={`text-base sm:text-lg font-light leading-5 pt-6 text-center ${
                  card.value.length > 10 ? "text-sm sm:text-base" : "text-xl sm:text-2xl"
                }`}
              >
                {card.value}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
