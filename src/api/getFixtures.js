import config from '../config/config';

const getFixtures = async (tournamentId) => {
	return await fetch(`${config.apiUrl}/tournaments/${tournamentId}/fixtures`);
};

export default getFixtures;
