const DashboardCards = ({ tasks = [], items = [] }: any) => {
  const total = tasks.length;
  const done = tasks.filter((t: any) => t.status === "Done").length;
  const low = items.filter((i: any) => i.quantity < 5).length;

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6">
      
      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500">Total Tasks</p>
        <h2 className="text-2xl font-bold">{total}</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500">Completed</p>
        <h2 className="text-2xl font-bold text-green-500">{done}</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500">Low Stock</p>
        <h2 className="text-2xl font-bold text-red-500">{low}</h2>
      </div>

    </div>
  );
};

export default DashboardCards;