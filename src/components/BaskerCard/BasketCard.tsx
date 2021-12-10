import React, {FC} from 'react';
import {ITodo} from "../../models/interfaces/ITodos";
import {StyledTitle, StyledBody, StyledButton, StyledCard, StyledCardActions} from '../UI-components'
import {CardContent, Grid} from "@mui/material";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styled from "styled-components";
import {useStateDispatch} from "../../hooks/useStateDispatch";
import {addTodo} from "../../redux/slices/todoSlice";

interface IPropsBasketCard {
    item: ITodo
}

const StyledRestore = styled(RestoreFromTrashIcon)`

  &:hover::after {
    content: 'Восстановить';
    background-color: #f1f3f4;
    color: black;
    padding: 5px 1rem;
    border-radius: 8px;
  }

`


const BasketCard: FC<IPropsBasketCard> = ({item}) => {
    const dispatch = useStateDispatch()
    const {title, body, id, completed} = item

    const restoreTodo = () => {
        dispatch(addTodo(item))
    }

    return (
        <Grid item>
            <StyledCard>
                <CardContent>
                    <StyledTitle decoration={completed ? 'line-through' : 'none'}>
                        {title}
                    </StyledTitle>
                    <StyledBody decoration={completed ? 'line-through' : 'none'}>
                        {body}
                    </StyledBody>
                </CardContent>
                <StyledCardActions>
                    <StyledButton size="small" ><DeleteOutlineIcon/></StyledButton>
                    <StyledButton size='small' onClick={restoreTodo}><StyledRestore/></StyledButton>
                </StyledCardActions>
            </StyledCard>
        </Grid>
    );
};

export default BasketCard;