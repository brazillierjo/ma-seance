import { useNavigate } from "react-router-dom";
import { GeneratedProgram } from "../components/GeneratedProgram";
import { removeFromLocalStorage } from "../helpers/localStorageHandler";

export const Program: React.FC<{}> = () => {
  const navigate = useNavigate();

  const endProgram = () => {
    removeFromLocalStorage("program");
    navigate("/");
  };

  return (
    <>
      <GeneratedProgram />
      <div className="mt-12 text-center">
        <button
          onClick={endProgram}
          className="mb-8 w-fit rounded-xl bg-indigo-700 px-3 py-2 text-white shadow-xl"
        >
          J'ai fini ma séance ! Fiooou 😮‍💨
        </button>
      </div>
    </>
  );
};
