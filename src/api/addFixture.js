import config from '../config/config';

const addFixture = async (body) => {
	return await fetch(
		`${config.apiUrl}/tournaments/${body.tournamentId}/fixtures`,
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(body),
		}
	);
};

export default addFixture;
