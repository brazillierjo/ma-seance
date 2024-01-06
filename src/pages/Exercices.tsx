import ButtonsForEachMuscles from "../components/ListForEachMuscles";

export default function Exercices() {
  return (
    <div className="height-page bg-lightGray p-4 dark:bg-darkGray dark:text-white">
      <h2 className="text-center text-lg font-bold">
        Retrouvez ici une liste d'exercices pour chaque groupe musculaire !
      </h2>

      <ButtonsForEachMuscles />
    </div>
  );
}
