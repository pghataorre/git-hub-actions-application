import config from '../config/config';

const points = async (action, teamId) => {
	return await fetch(`${config.apiUrl}/fixtures/setPoints/${teamId}`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify({ action }),
	});
};

export default points;
