import ButtonsForEachMuscles from "../components/ListForEachMuscles";

export default function Exercices() {
  return (
    <div className="bg-lightGray dark:bg-darkGray height-page p-4 dark:text-white">
      <h2 className="text-center text-lg font-bold">
        Retrouvez ici une liste d'exercices pour chaque groupe musculaire !
      </h2>

      <ButtonsForEachMuscles />
    </div>
  );
}
