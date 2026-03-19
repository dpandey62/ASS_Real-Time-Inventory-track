import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://127.0.0.1:5000";

const InventoryManager = ({ setItems }: any) => {
  const [items, setLocalItems] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  const fetchItems = async () => {
    const res = await axios.get(`${API}/inventory`);
    setLocalItems(res.data);
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async () => {
    if (!name.trim() || !qty) return;

    await axios.post(`${API}/inventory`, {
      name,
      quantity: Number(qty),
    });

    setName("");
    setQty("");
    fetchItems();
  };

  const deleteItem = async (id: number) => {
    await axios.delete(`${API}/inventory/${id}`);
    fetchItems();
  };

  const updateQty = async (id: number, value: number) => {
    await axios.post(`${API}/inventory/${id}/update`, {
      value,
    });
    fetchItems();
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">📦 Inventory</h2>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item"
          className="border p-2 rounded w-full focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          placeholder="Qty"
          className="border p-2 rounded w-24"
        />

        <button onClick={addItem} className="btn-primary">
          Add
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {items.length === 0 ? (
          <div className="text-center text-gray-400 py-6">
            📦 No items found
          </div>
        ) : (
          items.map((item: any) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white rounded-xl shadow hover:scale-[1.02] transition"
            >
              <div>
                <p className="font-semibold">{item.name}</p>

                <span
                  className={`text-sm ${
                    item.quantity < 5
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  Qty: {item.quantity}
                </span>
              </div>

              {/* Controls */}
              <div className="flex gap-2 items-center">
                
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                >
                  −
                </button>

                <button
                  onClick={() => updateQty(item.id, 1)}
                  className="btn-success"
                >
                  +
                </button>

                <button
                  onClick={() => deleteItem(item.id)}
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

export default InventoryManager;