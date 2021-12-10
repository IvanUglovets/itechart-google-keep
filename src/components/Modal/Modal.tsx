import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FC} from "react";

interface IPropsModal{
    open: boolean
    handleClose: () => void
    deleteAll: () => void
}

const Modal: FC<IPropsModal> = ({open,handleClose,deleteAll}) => {

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{color: 'black'}}>
                        Вы точно хотите удалить все заметки из корзины?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={deleteAll} autoFocus>
                       Cогласен
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Modal
