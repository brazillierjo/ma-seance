import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useMemo,
  useState
} from "react";
import { getFromLocalStorage } from "../helpers/localStorageHandler";
import exercices from "../data/workoutexercices.json";

export const GeneratedProgram: React.FC<{}> = () => {
  const askedProgram = useMemo(() => getFromLocalStorage("program"), []);

  const [program, setProgram] = useState<[] | null>();

  useEffect(() => {
    let responseData: any = [];

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

        responseData.push(randomExercices);
      }

      setProgram(responseData);
    }
  }, [askedProgram]);

  return (
    <>
      {
        // display name of each object in each array
        program &&
          program.map((day, index) => {
            return (
              <div key={index}>
                <h2>Day {index + 1}</h2>
                {day.map((exercice, index) => {
                  return (
                    <div key={index}>
                      <h3>{exercice.name}</h3>
                      <p>{exercice.description}</p>
                    </div>
                  );
                })}
              </div>
            );
          })
      }
    </>
  );
};
