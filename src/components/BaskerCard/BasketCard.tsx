import React, {FC} from 'react';
import {ITodo} from "../../models/interfaces/ITodos";
import {StyledTitle, StyledBody, StyledButton, StyledCard, StyledDate, Flex} from '../UI-components'
import {CardContent, Grid} from "@mui/material";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useStateDispatch} from "../../hooks/useStateDispatch";
import {addTodo} from "../../redux/slices/todoSlice";
import {deleteOneCard} from "../../redux/slices/basketSlice";
import styled from "styled-components";

interface IPropsBasketCard {
    item: ITodo
}

 const StyledRestore = styled(StyledButton)`
   display: block;
   &:hover::after {
     content: 'Восстановить';
     text-transform: capitalize;
     position: absolute;
     top: 88%;
     left: -100%;
     font-size: 10px;
     display: block;
     color: black;
     padding: 5px 1rem;
     border-radius: 8px;
   }
 `


const BasketCard: FC<IPropsBasketCard> = ({item}) => {
    const dispatch = useStateDispatch()
    const {title, body, id, completed, date} = item


    const deleteOneCardFromBasket = () => {
        dispatch(deleteOneCard(id))
    }


    const restoreTodo = () => {
        dispatch(addTodo(item))
        dispatch(deleteOneCard(id))

    }


    return (
        <>
            <Grid item>
                <StyledCard sx={{overflow: 'visible'}}>
                    <CardContent>
                        <StyledTitle decoration={completed ? 'line-through' : 'none'}>
                            {title}
                        </StyledTitle>
                        <StyledBody decoration={completed ? 'line-through' : 'none'}>
                            {body}
                        </StyledBody>
                        <StyledDate>{date ? `Cоздана ${date}` : null}</StyledDate>
                    </CardContent>
                    <Flex justify='space-between' align='center'>
                        <StyledButton size="small" onClick={deleteOneCardFromBasket}><DeleteOutlineIcon/></StyledButton>
                        <StyledRestore size='small' onClick={restoreTodo}><RestoreFromTrashIcon/></StyledRestore>
                    </Flex>
                </StyledCard>
            </Grid>
        </>
    );
};

export default BasketCard;