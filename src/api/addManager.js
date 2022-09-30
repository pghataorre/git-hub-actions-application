import config from '../config/config';

const addManager = async (body) => {
  return await fetch(`${config.apiUrl}/addManager`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export default addManager;
