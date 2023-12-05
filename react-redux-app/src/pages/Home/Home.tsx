import { People } from '@/data';
import React, { useEffect } from 'react';
import { addPeople } from '@/redux/states/people';
import { PeopleTable } from './components/PeopleTable';
import { useDispatch } from 'react-redux';



export interface HomeProps { }

const Home: React.FC<HomeProps> = ({ }) => {
	
	const dispatch = useDispatch()
 
	useEffect(() => {
		dispatch(addPeople(People))
	},[])

	return (
		<PeopleTable />

	);
};


export default Home;
