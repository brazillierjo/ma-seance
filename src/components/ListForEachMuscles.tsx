import { useEffect, useState } from "react";
import { getAllMuscles } from "../helpers/dataModuler";
import exercices from "../data/workoutexercices.json";
import { Index } from "../types/DataTypes";

export default function ListForEachMuscles() {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(
    "Abdominaux"
  );

  const [muscles, setMuscles] = useState<Object[] | null>();

  const listOfMuscles = getAllMuscles();

  useEffect(() => {
    if (selectedMuscle) {
      let filteredMuscle = exercices.filter(
        (exercice) => exercice.id === selectedMuscle
      );
      setMuscles(filteredMuscle);
    }

    if (selectedMuscle === null) {
      setMuscles(exercices);
    }
  }, [selectedMuscle]);

  return (
    <>
      <div className="bg-light dark:bg-dark mt-8 flex gap-4 overflow-x-auto rounded py-3 px-2">
        {listOfMuscles.map((muscle) => (
          <button
            key={muscle}
            onClick={() => setSelectedMuscle(muscle)}
            className={`${
              selectedMuscle === muscle
                ? "bg-primary text-white"
                : "bg-lightGray dark:bg-darkGray"
            } rounded px-2 py-1`}
          >
            {muscle}
          </button>
        ))}
      </div>

      <div className="py-4">
        {muscles &&
          muscles.map((muscle: any, index: Index) => (
            <div
              className="bg-light dark:bg-dark my-4 mx-4 flex rounded p-4"
              key={index}
            >
              <div className="w-5/12">
                <img
                  className="rounded-l"
                  src={`./assets/${muscle.path}`}
                  alt={muscle.name}
                />
              </div>
              <div className="bg-lightGray dark:bg-darkGray flex w-7/12 flex-col rounded-r p-3">
                <h3 className="mb-2 text-lg font-bold">_{muscle.name}</h3>
                <div className="mt-auto flex flex-wrap">
                  {muscle.secondary &&
                    muscle.secondary.map(
                      (secondary: string[], index: Index) => {
                        return (
                          <p
                            className="bg-light dark:bg-dark m-1 w-fit rounded px-2 py-1"
                            key={index}
                          >
                            {secondary}
                          </p>
                        );
                      }
                    )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
