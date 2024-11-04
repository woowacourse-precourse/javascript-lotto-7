export const calcProceeds = (details) => {
	const proceeds =
		details[0] * 5000 +
		details[1] * 50000 +
		details[2] * 1500000 +
		details[3] * 30000000 +
		details[4] * 2000000000;

	return proceeds;
};
