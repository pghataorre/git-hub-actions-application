import getTeams from '../api/getTeams';

const getTeamsApi = async (tournamentId) => {
	try {
		const res = await getTeams(tournamentId);
		if (!res.ok) {
			return false;
		}

		return res.json();
	} catch (error) {
		console.error('error ===== ', error);
		return false;
	}
};

export default getTeamsApi;
