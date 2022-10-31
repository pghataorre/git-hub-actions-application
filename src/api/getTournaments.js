import config from '../config/config';

const getTournaments = async () => {
	return await fetch(`${config.apiUrl}/tournaments`);
};

export default getTournaments;
