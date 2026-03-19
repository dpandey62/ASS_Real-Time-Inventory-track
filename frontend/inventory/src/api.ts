import axios from "axios";

const API = "http://127.0.0.1:5000/api";

export const getInventory = () => axios.get(`${API}/inventory`);
export const addInventory = (data: any) => axios.post(`${API}/inventory`, data);
export const updateInventory = (id: string, data: any) => axios.put(`${API}/inventory/${id}`, data);
export const deleteInventory = (id: string) => axios.delete(`${API}/inventory/${id}`);

export const getTasks = () => axios.get(`${API}/tasks`);
export const addTask = (data: any) => axios.post(`${API}/tasks`, data);
export const completeTask = (id: string) => axios.post(`${API}/tasks/${id}/complete`);
export const updateTask = (id: string, data: any) => axios.put(`${API}/tasks/${id}`, data);
export const deleteTask = (id: string) => axios.delete(`${API}/tasks/${id}`);
