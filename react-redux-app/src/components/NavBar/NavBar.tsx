import { PeopleState } from '@/redux/store';
import { Favorite } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { CustomDialog, FavoriteTable } from '..';
import { dialogOpenSubject } from '../CustomDialog/CustomDialog';

export interface NavbarInterface { }
	// types...


const NavBar: React.FC<NavbarInterface> = ({ }) => {
	useSelector((store: PeopleState ) => store.favorites)
	const handleClickOpen = () => {
		dialogOpenSubject.setSubject=true;
	}
	 
	return (
		<div>
			<CustomDialog>
				<FavoriteTable />
			</CustomDialog>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						REDUX
					</Typography>
					<IconButton color="error" aria-label="favorites" component="label"  onClick={handleClickOpen}  >
						<Favorite/>
					</IconButton>

				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;

