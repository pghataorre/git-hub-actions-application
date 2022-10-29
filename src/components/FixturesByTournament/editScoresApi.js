import addFixture from '../../api/addFixture';

const editSoresApi = async (body) => {
	try {
		const response = await addFixture(body);
		if (response.ok) {
			return await response.json();
		}

		return {};
	} catch (error) {
		console.log('error ==== ', error);
		return {};
	}
};

export default editSoresApi;
