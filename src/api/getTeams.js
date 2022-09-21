const getTeams = async () => {

  const res = await fetch('https://hv19rmo72i.execute-api.us-east-1.amazonaws.com/live/teams', { 
    mode: "cors",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
  });

  debugger;
  if (res.ok) { 
    return res;
  } else {
    throw new Error("Bad response");
  }
}

export default getTeams;