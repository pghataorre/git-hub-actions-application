import getTeams from '../api/getTeams';

const getTeamsApi = async (tournamnetId) => {
	try {
		const res = await getTeams(tournamnetId);
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
