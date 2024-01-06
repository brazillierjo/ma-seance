import { Link, useNavigate } from "react-router-dom";

import { GeneratedProgram } from "../components/GeneratedProgram";
import { removeFromLocalStorage } from "../helpers/localStorageHandler";

export default function Program() {
  const navigate = useNavigate();

  const endProgram = () => {
    removeFromLocalStorage("program");
    navigate("/");
  };

  if (localStorage.getItem("program")) {
    return (
      <div className="height-page bg-light p-3 dark:bg-dark dark:text-white">
        <GeneratedProgram />
        <div className="mt-12 text-center">
          <button onClick={endProgram} className="mb-8 w-fit rounded-xl bg-indigo-700 px-3 py-2 text-white shadow-xl">
            J'ai fini ma séance ! Fiooou 😮‍💨
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="height-page bg-light p-4 dark:bg-dark dark:text-white">
      <p className="text-center">Pas de programme en cours. Allez à l'accueil pour en générer un ! 💪</p>

      <div className="text-center">
        <Link to="/">
          <button className="mt-8 rounded-lg bg-primary px-4 py-2 text-white">Aller à l'accueil</button>
        </Link>
      </div>
    </div>
  );
}
