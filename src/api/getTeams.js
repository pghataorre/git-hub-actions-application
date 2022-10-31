import config from '../config/config';

const getTeams = async (tournamnetId) => {
	return await fetch(
		`${config.apiUrl}/teams/getTeams/${!tournamnetId ? '' : tournamnetId}`
	);
};

export default getTeams;
