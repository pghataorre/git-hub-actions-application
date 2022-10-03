import config from '../config/config';

const addManager = async (body) => {

  debugger;
  return await fetch(`${config.apiUrl}/addManager`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(body)
  });
}

export default addManager;
