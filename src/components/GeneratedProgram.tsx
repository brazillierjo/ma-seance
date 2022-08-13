import { useEffect } from "react";
import { getFromLocalStorage } from "../helpers/localStorageHandler";
import exercices from "../data/workoutexercices.json";

export const GeneratedProgram: React.FC<{}> = () => {
  const askedProgram = getFromLocalStorage("program");

  useEffect(() => {
    if (askedProgram) {
      for (let i = 0; i < askedProgram.length; i++) {
        const muscles = Object.keys(askedProgram[i]);
        const numberOfExercices = Object.values(askedProgram[i]);

        const filerByMuscle: any = exercices.filter((exercice) => {
          return muscles.includes(exercice.id);
        });

        const randomExercices = filerByMuscle
          .sort(() => Math.random() - 0.5)
          .slice(0, numberOfExercices);

        console.log(randomExercices);
      }
    }
  }, [askedProgram]);

  return (
    <div>
      <h1>Program</h1>
    </div>
  );
};
