import { useState } from "react";
import { getAllMuscles } from "../helpers/dataModuler";
import exercices from "../data/workoutexercices.json";

export default function ListForEachMuscles() {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>();

  const listOfMuscles = getAllMuscles();

  const exercicesForSelectedMuscle: any = () => {
    if (selectedMuscle) {
      let filteredMuscle = exercices.filter(
        (exercice: any) => exercice.muscle === selectedMuscle
      );

      return filteredMuscle;
    }
  };

  return (
    <>
      <div className="mt-8 flex gap-4 overflow-x-auto py-3">
        {listOfMuscles.map((muscle) => (
          <button
            key={muscle}
            onClick={() => {
              if (selectedMuscle === muscle) {
                setSelectedMuscle("");
              }
              setSelectedMuscle(muscle);
            }}
            className={`${
              selectedMuscle === muscle
                ? "bg-primary text-white"
                : "bg-lightGray"
            } rounded px-2 py-1`}
          >
            {muscle}
          </button>
        ))}
      </div>

      <div>{exercicesForSelectedMuscle}</div>
    </>
  );
}
