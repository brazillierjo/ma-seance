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
      if (e.target.elements[i + 1].value === "0") {
        alert("Veuillez choisir un nombre d'exercices");
        return;
      }

      let datas = {
        [e.target.elements[i].value]: e.target.elements[i + 1].value
      };
      formData.push(datas);
    }

    setInLocalStorage("program", formData);
    navigate("/programme");
  };

  return (
    <form onSubmit={handleSubmit}>
      {[...Array(numberOfMusclesInProgram)].map((n, i) => (
        <div className="my-4 grid grid-cols-5 justify-between gap-5" key={i}>
          <select
            name={`muscle-${i}`}
            className="bg-lightGray dark:bg-darkGray col-span-3 h-12 rounded-md p-3 shadow-md dark:text-white"
          >
            {listOfMuscles.map((muscle, key) => (
              <option key={key}>{muscle}</option>
            ))}
          </select>

          <select
            name={`number-${i}`}
            className="bg-lightGray dark:bg-darkGray col-span-2 h-12 rounded-md p-3 shadow-md dark:text-white"
          >
            {numberOfExercices(10)}
          </select>
        </div>
      ))}
      <div className="mt-6 flex justify-center gap-3 text-center">
        {numberOfMusclesInProgram > 1 && (
          <button
            onClick={() =>
              setNumberOfMusclesInProgram(numberOfMusclesInProgram - 1)
            }
            type="button"
            className="border-primary transform rounded-md border-2 px-2 py-1 shadow duration-150 hover:shadow-lg"
          >
            <HiMinusCircle color="#6466F1" size={25} />
          </button>
        )}

        <button
          onClick={() =>
            setNumberOfMusclesInProgram(numberOfMusclesInProgram + 1)
          }
          type="button"
          className="border-primary transform rounded-md border-2 px-2 py-1 shadow duration-150 hover:shadow-lg"
        >
          <BsFillPlusCircleFill color="#6466F1" size={25} />
        </button>
      </div>
      <div className="mt-8 flex justify-between text-center">
        <button
          type="button"
          onClick={() => {
            setNumberOfMusclesInProgram(1);
            removeFromLocalStorage("program");
          }}
          className="rounded-md bg-gray-600 p-2 text-white"
        >
          Remettre à zéro
        </button>
        <button type="submit" className="bg-primary rounded-md p-2 text-white">
          Let's gooooo 💪
        </button>
      </div>
    </form>
  );
};;
