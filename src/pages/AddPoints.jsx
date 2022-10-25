import React from 'react';
import TeamList from '../components/Teamlist/Teamlist';

const AddPoints = () => {
	return (
		<div className='admin-page'>
			<h1>Admin:: Set points for teams</h1>
			<p>Please use the buttons to add points for wins / draws / losses</p>
			<TeamList showButtons />
		</div>
	);
};

export default AddPoints;
