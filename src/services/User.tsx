import axios from "axios";
import { User } from "../models/User";

export const getUserById = async (
  id: string,
  setUser: (user: User | null) => void
): Promise<void> => {
  try {
    axios
      .get(`${import.meta.env.VITE_API_URL}/user/${id}`)
      .then(function (response) {
        console.log(response.data[0])
        setUser(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
};
