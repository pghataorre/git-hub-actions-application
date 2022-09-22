const getTeams = async () => {


  const res = await fetch('https://hxdgmqowq2.execute-api.eu-west-2.amazonaws.com/live/teams', { 
    "mode": "cors",
    "headers": {
      "Access-Control-Allow-Origin" : "https://www.permy.co.uk",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    }
  });

  return res;
}

export default getTeams;