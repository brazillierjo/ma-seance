import { useEffect, useState } from "react";

import exercices from "../data/workoutexercices.json";
import { getAllMuscles } from "../helpers/dataModuler";
import { Index } from "../types/DataTypes";

export default function ListForEachMuscles() {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>("Abdominaux");

  const [muscles, setMuscles] = useState<Object[] | null>();

  const listOfMuscles = getAllMuscles();

  useEffect(() => {
    if (selectedMuscle) {
      let filteredMuscle = exercices.filter((exercice) => exercice.id === selectedMuscle);
      setMuscles(filteredMuscle);
    }

    if (selectedMuscle === null) {
      setMuscles(exercices);
    }
  }, [selectedMuscle]);

  return (
    <>
      <div className="mt-8 flex gap-4 overflow-x-auto rounded bg-light px-2 py-3 dark:bg-dark">
        {listOfMuscles.map((muscle) => (
          <button
            key={muscle}
            onClick={() => setSelectedMuscle(muscle)}
            className={`${
              selectedMuscle === muscle ? "bg-primary text-white" : "bg-lightGray dark:bg-darkGray"
            } rounded px-2 py-1`}
          >
            {muscle}
          </button>
        ))}
      </div>

      <div className="py-4">
        {muscles &&
          muscles.map((muscle: any, index: Index) => (
            <div className="mx-4 my-4 flex rounded bg-light p-4 dark:bg-dark" key={index}>
              <div className="w-5/12">
                <img className="rounded-l" src={`./assets/${muscle.path}`} alt={muscle.name} />
              </div>
              <div className="flex w-7/12 flex-col rounded-r bg-lightGray p-3 dark:bg-darkGray">
                <h3 className="mb-2 text-lg font-bold">{muscle.name}</h3>
                <div className="mt-auto flex flex-wrap">
                  {muscle.secondary &&
                    muscle.secondary.map((secondary: string[], index: Index) => {
                      return (
                        <p className="m-1 w-fit rounded bg-light px-2 py-1 dark:bg-dark" key={index}>
                          {secondary}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
