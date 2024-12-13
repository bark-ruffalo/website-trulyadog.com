const BalanceCard = ({ title, balance }: { title: string; balance: string }) => {
  return (
    <div className="flex flex-col justify-between items-start p-6 min-h-[120px] flex-1 relative bg-blue-500 bg-opacity-10 rounded-2xl shadow-md overflow-hidden">
      <div className="absolute inset-0 bg-blue-500 bg-opacity-20 backdrop-blur-sm"></div>
      <div className="relative z-10 text-white">
        <div className="text-sm font-semibold mb-1 leading-4">{title}</div>
        <div className="text-2xl font-light leading-4 pt-6">{balance}</div>
      </div>
    </div>
  );
};

export default BalanceCard;
