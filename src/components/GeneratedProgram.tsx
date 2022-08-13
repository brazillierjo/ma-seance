import { useState } from "react";
import { getFromLocalStorage } from "../helpers/localStorageHandler";
import exercices from "../data/workoutexercices.json";

export const GeneratedProgram: React.FC<{}> = () => {
  const [program, setProgram] = useState<[] | null>(
    getFromLocalStorage("program")
  );

  const generateProgram = () => {
    if (program) {
      for (let i = 0; i < program.length; i++) {
        const muscle = Object.keys(program[i])[0];
        const numberOfExercices = Object.values(program[i])[0];

        const dataAsker = exercices.filter(
          (exercice) => exercice.id === muscle
        );

        console.log(dataAsker);
      }
    }
  };

  generateProgram();

  return (
    <div>
      <h1>Program</h1>
    </div>
  );
};
