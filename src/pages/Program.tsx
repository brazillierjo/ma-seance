import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getFromLocalStorage,
  removeFromLocalStorage
} from "../helpers/localStorageHandler";

export const Program: React.FC<{}> = () => {
  const navigate = useNavigate();

  const [program, setProgram] = useState<string | null>(
    getFromLocalStorage("program")
  );

  const endProgram = () => {
    removeFromLocalStorage("program");
    setProgram(null);
    navigate("/");
  };

  return (
    <>
      {program &&
        Object.keys(program).map((key: any) => {
          return (
            <div key={key}>
              {key} : {program[key]}
            </div>
          );
        })}

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
