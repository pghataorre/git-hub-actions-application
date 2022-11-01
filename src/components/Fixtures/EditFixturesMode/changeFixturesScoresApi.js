import changeFixturesScores from '../../../api/changeFixtureScores';

const changeFixturesScoresApi = async (body) => {
	try {
		const response = await changeFixturesScores(body);
		if (response.ok) {
			return await response.json();
		}

		return {};
	} catch (error) {
		console.log('error ==== ', error);
		return {};
	}
};

export default changeFixturesScoresApi;
