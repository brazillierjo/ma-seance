import React from "react";

export default function Agenda() {
  return (
    <>
      <div className="height-page m-3 bg-lightGray">
        <h1 className="text-center text-xl font-bold">
          Exemple de programme à suivre
        </h1>

        <div className="my-8 flex justify-between rounded-md bg-white px-8 py-5 shadow">
          <p>Lundi</p>
          <p>Pectoraux / Biceps</p>
        </div>

        <div className="my-8 flex justify-between rounded-md bg-white px-8 py-5 shadow">
          <p>Mardi</p>
          <p>Dos / Triceps</p>
        </div>

        <div className="my-8 flex justify-between rounded-md bg-white px-8 py-5 shadow">
          <p>Jeudi</p>
          <p className="capitalize">épaules / Abdos</p>
        </div>

        <div className="my-8 flex justify-between rounded-md bg-white px-8 py-5 shadow">
          <p>Vendredi</p>
          <p>Jambes</p>
        </div>
      </div>
    </>
  );
}
