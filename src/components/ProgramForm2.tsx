import { Formik, Form, Field, FieldArray } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMuscles, numberOfExercices } from "../helpers/dataModuler";
import { setInLocalStorage } from "../helpers/localStorageHandler";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";

export const ProgramForm: React.FC<{}> = () => {
  const [numberOfMusclesInProgram, setNumberOfMusclesInProgram] = useState(1);

  const listOfMuscles = getAllMuscles();

  const initialValues = {
    muscle0: listOfMuscles[0],
    number0: "0"
  };

  const navigate = useNavigate();

  const handleSubmit = (values: {}) => {
    setInLocalStorage("program", values);
    console.log(values);

    //if (numberOfMusclesInProgram > 0) navigate("/programme");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <div id="container">
            <FieldArray
              name="friends"
              render={({ insert, remove, push }) => {
                return (
                  <>
                    <DisplayMuscleInProgram />

                    <div className="flex justify-center gap-3 text-center">
                      {numberOfMusclesInProgram > 1 && (
                        <button
                          onClick={() =>
                            setNumberOfMusclesInProgram(
                              numberOfMusclesInProgram - 1
                            )
                          }
                          type="button"
                          className="transform rounded-md border-2 border-primary px-2 py-1 shadow duration-150 hover:shadow-lg"
                        >
                          <HiMinusCircle color="#6466F1" size={20} />
                        </button>
                      )}

                      <button
                        onClick={() => {
                          push(<DisplayMuscleInProgram />);
                        }}
                        type="button"
                        className="transform rounded-md border-2 border-primary px-2 py-1 shadow duration-150 hover:shadow-lg"
                      >
                        <BsFillPlusCircleFill color="#6466F1" size={20} />
                      </button>
                    </div>
                  </>
                );
              }}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-8 rounded-lg bg-primary p-2 text-white"
            >
              Let's gooooo 💪
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export const DisplayMuscleInProgram = () => {
  const listOfMuscles = getAllMuscles();

  return (
    <div className="my-4 grid grid-cols-5 justify-between gap-5">
      <Field
        as="select"
        className="col-span-3 rounded-lg bg-lightGray p-3 shadow-md"
      >
        {listOfMuscles.map((muscle, key) => (
          <option key={key}>{muscle}</option>
        ))}
      </Field>

      <Field
        as="select"
        className="col-span-2 rounded-lg bg-lightGray p-3 shadow-md"
      >
        {numberOfExercices(10)}
      </Field>
    </div>
  );
};
