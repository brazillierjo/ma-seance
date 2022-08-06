import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { getAllMuscles, numberOfExercices } from "../helpers/dataModuler";
import { setInLocalStorage } from "../helpers/localStorageHandler";

export const ProgramForm: React.FC<{}> = () => {
  const navigate = useNavigate();

  const listOfMuscles = getAllMuscles();

  const initialValues = {
    numberOfExercices: 0,
    muscle: listOfMuscles[0]
  };

  const handleSubmit = (values: {}) => {
    setInLocalStorage("program", values);

    navigate("/programme");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <div className="grid grid-cols-5 justify-between gap-5">
            <Field
              as="select"
              className="col-span-3 rounded-lg bg-lightGray p-3"
              name="muscle"
            >
              {listOfMuscles.map((muscle) => (
                <option key={muscle}>{muscle}</option>
              ))}
            </Field>
            <Field
              as="select"
              className="col-span-2 rounded-lg bg-lightGray p-3"
              name="numberOfExercices"
            >
              {numberOfExercices(10)}
            </Field>
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
