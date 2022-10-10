import config from '../config/config';

const addTournament = async (body) => {
  debugger;

  return await fetch(`${config.apiUrl}/addTournament`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(body)
  });
}

export default addTournament;
