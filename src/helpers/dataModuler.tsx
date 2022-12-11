import data from "../data/workoutexercices.json";

// list all different muscles in data
export const getAllMuscles = () => {
	const groupFilter = data.map((exo) => {
		return exo.id;
	});
	let uniqueMuscles = groupFilter;
	uniqueMuscles = uniqueMuscles
		.flat()
		.filter((v, i, a) => a.indexOf(v) === i);
	uniqueMuscles.sort();
	return uniqueMuscles;
};

// number of exercices for each muscle group
export const numberOfExercices = (number: number) => {
	const numberOfExercices = [];
	for (let i = 0; i <= number; i++) {
		numberOfExercices.push(<option key={i}>{i}</option>);
	}
	return numberOfExercices;
};
