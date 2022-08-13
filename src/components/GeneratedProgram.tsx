import { useEffect, useMemo, useState } from "react";
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
      {program &&
        program.map((group: any, index: any) => {
          console.log(typeof group);

          if (group) {
            return (
              <div
                className="mx-2 my-4 rounded-md border-4 border-primary bg-lightGray p-1"
                key={index}
              >
                <h2 className="px-4 text-2xl font-bold italic">
                  {group[0] && group[0].id}
                </h2>
                {group &&
                  group.map((exercice: any, index: any) => {
                    return (
                      <div
                        className="my-4 mx-4 flex rounded bg-white p-4"
                        key={index}
                      >
                        <img
                          className="w-4/12 rounded"
                          src={`./assets/${exercice.path}`}
                          alt={exercice.name}
                        />
                        <div className="flex w-8/12 flex-col rounded bg-lightGray p-3">
                          <h3 className="mb-2 text-lg font-bold">
                            _{exercice.name}
                          </h3>
                          <p className="text-xm">
                            Séries :{" "}
                            <span className="font-bold">
                              {Math.floor(Math.random() * (5 - 3 + 1) + 3)}
                            </span>
                          </p>
                          <p className="text-xm">
                            Réps :{" "}
                            <span className="font-bold">
                              {Math.floor(Math.random() * (15 - 8 + 1) + 8)}
                            </span>
                          </p>
                          <div className="mt-auto flex flex-wrap">
                            {exercice.secondary &&
                              exercice.secondary.map(
                                (secondary: any, index: any) => {
                                  return (
                                    <p
                                      className="m-1 w-fit rounded bg-white px-2 py-1"
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
                    );
                  })}
              </div>
            );
          }
          return null;
        })}
    </>
  );
};
