import config from '../../../config/config';

const filterFixturesToTeams = (fixtures, teams) => {
	const fixturesFilteredData = fixtures.Items.filter((fixtureItem) => {
		const todaysDate = new Date();
		const currentTime = new Date().getTime();
		const fixtureTime = new Date(fixtureItem.fixtureTimeDate).getTime();
		const gameEndTime = new Date().setTime(
			new Date(fixtureItem.fixtureTimeDate).getTime() +
				config.maxGameTime * 60000
		);

		const fixtureDateString = new Date(
			fixtureItem.fixtureTimeDate
		).toLocaleDateString(config.dateLocaleString);

		if (
			fixtureDateString ===
			todaysDate.toLocaleDateString(config.dateLocaleString)
		) {
			const homeTeam = teams.Items.filter((teamsItem) => {
				return fixtureItem.homeTeamId === teamsItem.ID
					? teamsItem.teamName
					: '';
			})[0];

			const awayTeam = teams.Items.filter((teamsItem) => {
				return fixtureItem.awayTeamId === teamsItem.ID
					? teamsItem.teamName
					: '';
			})[0];

			fixtureItem.homeTeam = homeTeam;
			fixtureItem.awayTeam = awayTeam;
			fixtureItem.showScores = currentTime > fixtureTime;

			fixtureItem.gameInPlay =
				currentTime > fixtureTime && currentTime <= gameEndTime;
			return fixtureItem;
		} else {
			return null;
		}
	});

	return fixturesFilteredData.sort((a, b) => {
		return (
			new Date(a.fixtureTimeDate).getTime() -
			new Date(b.fixtureTimeDate).getTime()
		);
	});
};

export default filterFixturesToTeams;
