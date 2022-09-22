const getTeams = async () => {

  const res = await fetch('https://hv19rmo72i.execute-api.us-east-1.amazonaws.com/live/teams', { 
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin" : "https://www.permy.co.uk",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    }
  });

    return res;
}

export default getTeams;