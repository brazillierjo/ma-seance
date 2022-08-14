import { ProgramForm } from "../components/ProgramForm";

export default function Home() {
  return (
    <div className="height-page bg-lightGray dark:bg-darkGray py-8 dark:text-white">
      <div className="bg-light dark:bg-dark mx-auto w-11/12 rounded p-6 shadow dark:text-white">
        <h1 className="mb-8 text-center text-lg font-bold">
          Quel groupe musculaire doit-on travailler ?
        </h1>

        <ProgramForm />
      </div>

      <p className="mt-12 animate-pulse text-center">Générez votre séance 👆</p>
    </div>
  );
}
