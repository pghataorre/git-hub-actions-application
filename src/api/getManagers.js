import config from '../config/config';

const getManagers = async (teamId) => {
	return await fetch(`${config.apiUrl}/managers/${teamId}`);
};

export default getManagers;
