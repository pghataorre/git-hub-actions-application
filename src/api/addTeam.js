import config from '../config/config';

const addTeam = async (body) => {
  return await fetch(`${config.apiUrl}/addTeam`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(body)
  });
}

export default addTeam;
