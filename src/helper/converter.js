export const stringToBoolean = (word) => {
	switch (word) {
		case 'true':
			return true;
		case 'false':
			return false;
		default:
			return word;
	}
};
