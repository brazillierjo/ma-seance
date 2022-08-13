import { getAllMuscles, numberOfExercices } from "../helpers/dataModuler";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import { HiMinusCircle } from "react-icons/hi";
import {
  removeFromLocalStorage,
  setInLocalStorage
} from "../helpers/localStorageHandler";
import { useNavigate } from "react-router-dom";

export const ProgramForm = () => {
  const [numberOfMusclesInProgram, setNumberOfMusclesInProgram] = useState(1);

  const listOfMuscles = getAllMuscles();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let formData = [];
    for (let i = 0; i < numberOfMusclesInProgram * 2; i += 2) {
      let datas = {
        [e.target.elements[i].value]: e.target.elements[i + 1].value
      };
      formData.push(datas);
    }

    setInLocalStorage("program", formData);
    navigate("/program");
  };

  return (
    <form onSubmit={handleSubmit}>
      {[...Array(numberOfMusclesInProgram)].map((n, i) => (
        <div className="my-4 grid grid-cols-5 justify-between gap-5" key={i}>
          <select
            name={`muscle-${i}`}
            className="col-span-3 rounded-lg bg-lightGray p-3 shadow-md"
          >
            {listOfMuscles.map((muscle, key) => (
              <option key={key}>{muscle}</option>
            ))}
          </select>

          <select
            name={`number-${i}`}
            className="col-span-2 rounded-lg bg-lightGray p-3 shadow-md"
          >
            {numberOfExercices(10)}
          </select>
        </div>
      ))}

      <div className="flex justify-center gap-3 text-center">
        {numberOfMusclesInProgram > 1 && (
          <button
            onClick={() =>
              setNumberOfMusclesInProgram(numberOfMusclesInProgram - 1)
            }
            type="button"
            className="transform rounded-md border-2 border-primary px-2 py-1 shadow duration-150 hover:shadow-lg"
          >
            <HiMinusCircle color="#6466F1" size={20} />
          </button>
        )}

        <button
          onClick={() =>
            setNumberOfMusclesInProgram(numberOfMusclesInProgram + 1)
          }
          type="button"
          className="transform rounded-md border-2 border-primary px-2 py-1 shadow duration-150 hover:shadow-lg"
        >
          <BsFillPlusCircleFill color="#6466F1" size={20} />
        </button>
      </div>

      <div className="mt-8 flex justify-between text-center">
        <button
          type="button"
          onClick={() => {
            setNumberOfMusclesInProgram(1);
            removeFromLocalStorage("program");
          }}
          className="rounded-lg bg-gray-300 p-2"
        >
          Remettre à zéro
        </button>
        <button type="submit" className="rounded-lg bg-primary p-2 text-white">
          Let's gooooo 💪
        </button>
      </div>
    </form>
  );
};
