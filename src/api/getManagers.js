import config from '../config/config';

const getManagers = async (teamId) => {
  return await fetch(`${config.apiUrl}/getManager/${teamId}`);
}

export default getManagers;
