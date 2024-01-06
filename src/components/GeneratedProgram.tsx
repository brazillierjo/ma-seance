import { useEffect, useMemo, useState } from "react";

import exercices from "../data/workoutexercices.json";
import { getFromLocalStorage } from "../helpers/localStorageHandler";
import { DataType, Index } from "../types/DataTypes";

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

        const randomExercices = filerByMuscle.sort(() => Math.random() - 0.5).slice(0, numberOfExercices);

        responseData.push(randomExercices);
      }

      setProgram(responseData);
    }
  }, [askedProgram]);

  return (
    program &&
    program.map((group: any, index: any) => {
      if (group) {
        return (
          <div className="my-4 rounded-md border-4 border-primary bg-lightGray p-2 dark:bg-darkGray" key={index}>
            <h2 className="px-4 text-2xl font-bold italic">{group[0] && group[0].id}</h2>
            {group &&
              group.map((exercice: DataType, index: Index) => {
                return (
                  <div className="mx-4 my-4 flex rounded bg-light p-4 dark:bg-dark dark:text-white" key={index}>
                    <div className="w-5/12">
                      <img className="aspect-square rounded-l" src={`./assets/${exercice.path}`} alt={exercice.name} />
                    </div>
                    <div className="flex w-7/12 flex-col rounded-r bg-lightGray p-3 dark:bg-darkGray dark:text-white">
                      <h3 className="mb-2 text-lg font-bold">_{exercice.name}</h3>
                      <p className="text-xm">
                        Séries : <span className="font-bold">{Math.floor(Math.random() * (5 - 3 + 1) + 3)}</span>
                      </p>
                      <p className="text-xm">
                        Réps : <span className="font-bold">{Math.floor(Math.random() * (15 - 8 + 1) + 8)}</span>
                      </p>
                      <div className="mt-auto flex flex-wrap">
                        {exercice.secondary &&
                          exercice.secondary.map((secondary: string, index: number) => {
                            return (
                              <p
                                className="m-1 w-fit rounded bg-light px-2 py-1 dark:bg-dark dark:text-white"
                                key={index}
                              >
                                {secondary}
                              </p>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      }
      return null;
    })
  );
};
