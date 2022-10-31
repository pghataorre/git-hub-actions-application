import getFixtures from '../api/getFixtures';

const getFixturesApi = async (tournamentId) => {
	try {
		const res = await getFixtures(tournamentId);
		if (!res.ok) {
			return {};
		}

		return res.json();
	} catch (error) {
		console.error('error ===== ', error);
		return {};
	}
};

export default getFixturesApi;
