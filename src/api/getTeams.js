const getTeams = async () => {
  return await fetch('https://hxdgmqowq2.execute-api.eu-west-2.amazonaws.com/live/teams');
}

export default getTeams;