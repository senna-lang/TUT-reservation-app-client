import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchUsers = async () => {
  const res = await axios.get("http://127.0.0.1:8000/users");
  return res.data;
};

export const fetchRooms = async () => {
  const res = await axios.get("http://127.0.0.1:8000/rooms");
  return res.data;
};