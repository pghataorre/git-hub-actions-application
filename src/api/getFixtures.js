import config from '../config/config';

const getFixtures = async (tournamnetId) => {
	return await fetch(
		`${config.apiUrl}/fixtures/getFixtures/${!tournamnetId ? '' : tournamnetId}`
	);
};

export default getFixtures;
