import { ProgramForm } from "../components/ProgramForm";

export default function Home() {
	return (
		<div className="height-page bg-lightGray py-8 dark:bg-darkGray dark:text-white">
			<div className="mx-auto w-11/12 rounded bg-light p-6 shadow dark:bg-dark dark:text-white">
				<h1 className="mb-8 text-center text-lg font-bold">
					Quel groupe musculaire doit-on travailler ?
				</h1>

				<ProgramForm />
			</div>

			<p className="mt-12 animate-pulse text-center">
				Générez votre séance 👆
			</p>
		</div>
	);
}
