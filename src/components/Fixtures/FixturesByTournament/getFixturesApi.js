import getFixtures from '../../api/getFixtures';

const getFixturesApi = async (tournamentId) => {
	try {
		const response = await getFixtures(tournamentId);
		if (response.ok) {
			const results = await response.json();
			return results;
		}

		return {};
	} catch (error) {
		console.log('error ==== ', error);
		return {};
	}
};

export default getFixturesApi;
