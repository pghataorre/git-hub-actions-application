import config from '../config/config';

const getTeams = async (tournamnetId) => {
	return await fetch(
		`${config.apiUrl}/teams/${!tournamnetId ? '' : tournamnetId}`
	);
};

export default getTeams;
