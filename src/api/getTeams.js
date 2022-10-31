import config from '../config/config';

const getTeams = async (tournamentId) => {
	return await fetch(`${config.apiUrl}/tournaments/${tournamentId}/teams`);
};

export default getTeams;
