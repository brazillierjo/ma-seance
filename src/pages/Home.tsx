import { ProgramForm } from "../components/ProgramForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-lightGray py-8">
      <div className="mx-auto w-11/12 rounded bg-light p-6 shadow">
        <h1 className="mb-8 text-center text-lg font-bold">
          Quel groupe musculaire doit-on travailler ?
        </h1>

        <ProgramForm />
      </div>

      <p className=" mt-12 animate-pulse text-center">
        Générez votre séance 👆
      </p>
    </div>
  );
}
