import React from "react";

export default function Agenda() {
	return (
		<>
			<div className="height-page bg-lightGray p-3 dark:bg-darkGray dark:text-white">
				<h1 className="text-center text-xl font-bold">
					Exemple de programme à suivre
				</h1>

				<div className="my-8 flex justify-between rounded-md bg-light px-8 py-5 shadow dark:bg-dark dark:text-white">
					<p>Lundi</p>
					<p>Pectoraux / Biceps</p>
				</div>

				<div className="my-8 flex justify-between rounded-md bg-light px-8 py-5 shadow dark:bg-dark dark:text-white">
					<p>Mardi</p>
					<p>Dos / Triceps</p>
				</div>

				<div className="my-8 flex justify-between rounded-md bg-light px-8 py-5 shadow dark:bg-dark dark:text-white">
					<p>Jeudi</p>
					<p className="capitalize">épaules / Abdos</p>
				</div>

				<div className="my-8 flex justify-between rounded-md bg-light px-8 py-5 shadow dark:bg-dark dark:text-white">
					<p>Vendredi</p>
					<p>Jambes</p>
				</div>
			</div>
		</>
	);
}
