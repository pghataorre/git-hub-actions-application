import getTeams from '../api/getTeams';

const getTeamsApi = async () => {
	try {
		const res = await getTeams();
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
