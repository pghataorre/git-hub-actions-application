import config from '../config/config';

const getTeams = async () => {
	return await fetch(`${config.apiUrl}/teams/`);
};

export default getTeams;
