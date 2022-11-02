import points from '../../api/points';

const pointsApi = async (action, teamId) => {
	try {
		const response = await points(action, teamId);
		if (response.ok) {
			return await response.json();
		}

		return false;
	} catch (error) {
		console.log('error ==== ', error);
		return false;
	}
};

export default pointsApi;
