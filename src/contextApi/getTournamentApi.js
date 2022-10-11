import getTournament from '../api/getTournaments';

const getTournamentsApi = async () => {
  try {
    const response = await getTournament();
    
    if(response.ok) {
      return await response.json();
    }

    return false;
  } catch (error) {
    console.log('error ==== ', error);
    return false;
  }
}

export default getTournamentsApi;
