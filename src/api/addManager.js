import config from '../config/config';

const addManager = async (body) => {
	return await fetch(`${config.apiUrl}/managers/${body.teamId}`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(body),
	});
};

export default addManager;
