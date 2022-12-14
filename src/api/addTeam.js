import config from '../config/config';

const addTeam = async (body) => {
	const { tournamentId } = body;

	return await fetch(
		`${config.apiUrl}
		/tournaments/${tournamentId}/teams`,
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(body),
		}
	);
};

export default addTeam;
