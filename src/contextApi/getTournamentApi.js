import getTournament from '../api/getTournaments';

const getTournamentApi = async (tournamentId) => {
	try {
		const response = await getTournament(tournamentId);

		if (response.ok) {
			return await response.json();
		}

		return {};
	} catch (error) {
		console.log('error ==== ', error);
		return {};
	}
};

export default getTournamentApi;
