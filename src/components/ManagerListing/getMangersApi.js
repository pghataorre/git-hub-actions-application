import getManagers from '../../api/getManagers';

const getManagersApi = async (teamId) => {
	try {
		const response = await getManagers(teamId);
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

export default getManagersApi;
