import { Person } from "@/models";
import { removeFavorite } from "@/redux/states/favorites";
import { PeopleState } from "@/redux/store";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";


export interface FavoriteTableInterface  {
	// types...
}

const FavoriteTable: React.FC<FavoriteTableInterface>  = ({}) => {
	const dispatch = useDispatch()
	const pageSize: number = 5;
	const stateFavorites= useSelector((store: PeopleState) => store.favorites)

	const handleClick = (person: Person) => {
		dispatch(removeFavorite(person))
		
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
					{<IconButton size="small" onClick={() => handleClick(params.row)}>
						<Delete/>
					</IconButton>
					}
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
			headerName: 'Compañia', minWidth: 130,
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}, {
			field: 'levelOfHappiness',
			headerName: 'Nivel Felicidad', minWidth: 130,
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>

		},

	];

	return (
		<DataGrid
			disableRowSelectionOnClick
			disableColumnSelector
			pagination
			rowSelectionModel={'single'}
			getRowId={(row) => row.id}
			rows={stateFavorites}
			columns={columns}
			style={{ height: 500, width: '100%' }}
			

		/>
	);
};

export default FavoriteTable;
