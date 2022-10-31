import config from '../config/config';

const getManagers = async (teamId) => {
	return await fetch(`${config.apiUrl}/manager/getManager/${teamId}`);
};

export default getManagers;
