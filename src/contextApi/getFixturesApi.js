import getFixtures from '../api/getFixtures';

const getFixturesApi = async (tournamnetId) => {
	try {
		const res = await getFixtures(tournamnetId);
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
