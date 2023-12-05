import React, { useEffect } from 'react';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { addFavorite } from '@/redux/states/favorites';
import { PeopleState } from '@/redux/store';
import { useState } from 'react';

export type PeopleTableProps = {
	// types...
}

const PeopleTable: React.FC<PeopleTableProps>  = ({}) => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
	const dispatch = useDispatch()
	const pageSize: number = 5;

	const statePeople= useSelector((store: PeopleState) => store.people)
	const favoritePeople= useSelector((store: PeopleState) => store.favorites)
	const findPerson = (person: Person) => !!favoritePeople.find(p => p.id === person.id)
	const filterPerson = (person: Person) => favoritePeople.filter(p => p.id === person.id)

	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
		dispatch(addFavorite(filteredPeople))
		setSelectedPeople(filteredPeople)
	}

	const columns = [
		{
			field: 'Actions',
			headerName: '',
			minWidth: 50,
			sortable: false,
			flex: 1,
			renderCell: (params: GridRenderCellParams) => (
				<>
					{<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)}  />}
				</>
			)
		},
		
		{
			field: 'name',
			headerName: 'Nombre', minWidth: 130,
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>

		},
		{
			field: 'category',
			headerName: 'Categoria', minWidth: 130,
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'company',
			headerName: 'Compañia', minWidth: 150,
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}, {
			field: 'levelOfHappiness',
			headerName: 'Nivel Felicidad', minWidth: 130,
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>

		},

	];

	useEffect(() => {
		setSelectedPeople(favoritePeople)
	}
	,[favoritePeople])

	return (
		<DataGrid
			getRowId={(row) => row.id}
			rows={statePeople}
			columns={columns}
			style={{ height: 400, width: '100%' }}

		/>
	);
};

export default PeopleTable;
