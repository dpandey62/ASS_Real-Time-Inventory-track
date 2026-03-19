import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://127.0.0.1:5000";

const TaskManager = ({ setTasks }: any) => {
  const [tasks, setLocalTasks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API}/tasks`);
      setLocalTasks(res.data);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ✅ Add Task (Premium UX)
  const addTask = async () => {
    if (!title.trim()) {
      setError("Task cannot be empty");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await axios.post(`${API}/tasks`, { title });

      setTitle("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
      setError("Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Enter Key Support
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  // ✅ Complete Task
  const updateTask = async (id: number) => {
    try {
      await axios.post(`${API}/tasks/${id}/complete`);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // ✅ Delete Task
  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`${API}/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">📝 Tasks</h2>

      {/* 🔥 Input Section */}
      <div className="flex gap-2 mb-3">
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
          }}
          onKeyDown={handleKeyPress}
          placeholder="Enter task..."
          className="border p-2 rounded w-full focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={addTask}
          disabled={loading}
          className={`px-4 py-2 rounded text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "btn-primary"
          }`}
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>

      {/* ❌ Error */}
      {error && (
        <p className="text-red-500 text-sm mb-2">{error}</p>
      )}

      {/* 🔥 Task List */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="text-center text-gray-400 py-6">
            📭 No tasks yet
          </div>
        ) : (
          tasks.map((t: any) => (
            <div
              key={t.id}
              className="flex justify-between items-center p-4 bg-white rounded-xl shadow hover:scale-[1.02] transition"
            >
              <div>
                <p className="font-semibold">{t.title}</p>

                <span
                  className={`text-sm font-medium ${
                    t.status === "Done"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {t.status}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => updateTask(t.id)}
                  className="btn-success"
                >
                  Done
                </button>

                <button
                  onClick={() => deleteTask(t.id)}
                  className="btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskManager;