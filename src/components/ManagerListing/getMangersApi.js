import getManagers from  '../../api/getManagers';

const getTeamManagers = async (teamId) => {
  try {
    const response = await getManagers(teamId);
    if(response.ok) {
      return await response.json();
    }

    return false;
  } catch (error) {
    console.log('error ==== ', error);
    return false;
  }
}

export default getTeamManagers;
