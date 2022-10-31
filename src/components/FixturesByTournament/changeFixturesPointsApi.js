import changeFixturesPoints from '../../api/addFixture';

const changeFixturesPointsApi = async (body) => {
	try {
		const response = await changeFixturesPoints(body);
		if (response.ok) {
			return await response.json();
		}

		return {};
	} catch (error) {
		console.log('error ==== ', error);
		return {};
	}
};

export default changeFixturesPointsApi;
