import config from '../config/config';

const points = async (action, teamId) => {
	return await fetch(`${config.apiUrl}/points`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify({ action, teamId }),
	});
};

export default points;
