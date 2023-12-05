import { SubjectManager } from "@/models";
import { Dialog } from "@mui/material";
import {useEffect, useState} from "react";
import { Subscription } from "rxjs";

interface CustomDialogProps {
	children: React.ReactNode;
}

export const dialogOpenSubject = new SubjectManager<boolean>();
export const dialogCloseSubject = new SubjectManager<boolean>();

export const CustomDialog: React.FC<CustomDialogProps> = ({ children }) => {
	const [open, setOpen] = useState<boolean>(false);
		
	let openSubject$ = new Subscription();
	let closeSubject$ = new Subscription();

	const handleClickOpen = () => {
		setOpen(true);
	}
	const handleClose = () => {
		setOpen(false);
	}
	const handleExit = () => {
		dialogCloseSubject.setSubject=false;
	};

	useEffect(() => {
		openSubject$ = dialogOpenSubject.getSubject.subscribe(()=>handleClickOpen());
		closeSubject$ = dialogCloseSubject.getSubject.subscribe(()=>handleClose());
		return () => {
			openSubject$.unsubscribe();
			closeSubject$.unsubscribe();
		}
	},[])

	return (
		<Dialog open={open}
		onClose={()=> handleExit()}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description" >
		{children}
		</Dialog>
	);
}

export default CustomDialog;
