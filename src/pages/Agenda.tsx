import React from "react";

export default function Agenda() {
  return (
    <>
      <div className="height-page bg-lightGray dark:bg-darkGray p-3 dark:text-white">
        <h1 className="text-center text-xl font-bold">
          Exemple de programme à suivre
        </h1>

        <div className="bg-light dark:bg-dark my-8 flex justify-between rounded-md px-8 py-5 shadow dark:text-white">
          <p>Lundi</p>
          <p>Pectoraux / Biceps</p>
        </div>

        <div className="bg-light dark:bg-dark my-8 flex justify-between rounded-md px-8 py-5 shadow dark:text-white">
          <p>Mardi</p>
          <p>Dos / Triceps</p>
        </div>

        <div className="bg-light dark:bg-dark my-8 flex justify-between rounded-md px-8 py-5 shadow dark:text-white">
          <p>Jeudi</p>
          <p className="capitalize">épaules / Abdos</p>
        </div>

        <div className="bg-light dark:bg-dark my-8 flex justify-between rounded-md px-8 py-5 shadow dark:text-white">
          <p>Vendredi</p>
          <p>Jambes</p>
        </div>
      </div>
    </>
  );
}
