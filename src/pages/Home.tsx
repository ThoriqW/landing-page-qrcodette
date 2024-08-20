import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/User";
import { User } from "../models/User";

const Home = () => {
  const { id } = useParams<{ id?: string }>();
  const { filename } = useParams<{ filename?: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      if (id) {
        getUserById(id, setUser);
      } else {
        console.log("ID is undefined");
      }
    } catch (e) {
      console.log(e);
    }
  }, [id]);
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <p className="mb-5 text-center">
        Dokumen ini dikeluarkan Oleh Rumkit Tk.III dr.Sindhu Trisno Palu dan
        ditandatangani secara elektronik
        {user ? ` oleh ${user.nama}` : "..."}
      </p>
      <a
        target="_blank"
        href={`https://berkastte.rssindhutrisnopalu.com/webapps/berkastte/resume_ranap/${filename}`}
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Download File
      </a>
    </div>
  );
};

export default Home;
