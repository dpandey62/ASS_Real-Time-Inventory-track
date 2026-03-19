import { useState } from "react";
import Navbar from "./Components/Navbar";
import DashboardCards from "./Components/DashboardCards";
import TaskManager from "./Components/TaskManager";
import InventoryManager from "./Components/InventoryManager";

function App() {
  const [loading, setLoading] = useState(false);

  const [tasks, setTasks] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);

  // ✅ Simple Refresh (NO remount)
  const refresh = () => {
    setLoading(true);

    setTimeout(() => {
      window.location.reload(); // clean & reliable
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      
      {/* 🔥 Navbar */}
      <Navbar onRefresh={refresh} loading={loading} />

      {/* 🔥 Main Container */}
      <div className="p-6 max-w-7xl mx-auto">
        
        {/* 🔥 Dashboard Cards */}
        <DashboardCards tasks={tasks} items={items} />

        {/* 🔥 Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <TaskManager setTasks={setTasks} />

          <InventoryManager setItems={setItems} />

        </div>
      </div>
    </div>
  );
}

export default App;