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
        // Determine the background class based on card.className
        const bgClass = card.className === "green" ? "bg-green-500" : "bg-blue-500"; // Adjust as needed

        return (
          <div
            className="flex flex-col justify-between items-start p-6 min-h-[120px] w-[300px] m-2 relative bg-white bg-opacity-10 rounded-2xl shadow-md flex-shrink-0 sm:w-[350px] md:w-[450px]"
            key={index}
          >
            {/* Background Blur */}
            <div className={`absolute inset-0 rounded-2xl z-0 ${bgClass} bg-opacity-20 blur-sm`}></div>
            <div className="relative z-10 text-white">
              <div className="text-sm font-semibold uppercase mb-1 leading-4">{card.title}</div>
              <div className="text-2xl font-light leading-4 pt-6">{card.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
