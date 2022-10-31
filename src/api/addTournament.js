import config from '../config/config';

const addTournament = async (body) => {
	return await fetch(`${config.apiUrl}/tournaments/createTournament`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(body),
	});
};

export default addTournament;
