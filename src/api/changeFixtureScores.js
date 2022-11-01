import config from '../config/config';

const changeFixtureScores = async (body) => {
	return await fetch(
		`${config.apiUrl}/tournaments/${body.tournamentId}/fixtures`,
		{
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(body),
		}
	);
};

export default changeFixtureScores;
