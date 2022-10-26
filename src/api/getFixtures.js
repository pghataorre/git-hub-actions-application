import config from '../config/config';

const getTeams = async (tournamnetId) => {
	return await fetch(
		`${config.apiUrl}/getFixtures/${!tournamnetId ? '' : tournamnetId}`
	);
};

export default getTeams;
