import config from '../config/config';

const getFixtures = async (tournamnetId) => {
	return await fetch(
		`${config.apiUrl}/getFixtures/${!tournamnetId ? '' : tournamnetId}`
	);
};

export default getFixtures;
