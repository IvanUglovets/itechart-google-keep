import React, {FC} from 'react';
import {StyledTitle, StyledBody, StyledCard, StyledDate, Flex} from '../UI-components'
import {CardContent, Grid} from "@mui/material";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useStateDispatch} from "../../hooks/useStateDispatch";
import {addTodo} from "../../redux/slices/todoSlice";
import {deleteOneCard} from "../../redux/slices/basketSlice";
import {StyledDelete, StyledRestore } from './styled-basket-card';
import {IPropsBasketCard} from "./ICard";



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
                        <StyledDate>{date}</StyledDate>
                    </CardContent>
                    <Flex justify='space-between' align='center'>
                        <StyledDelete size="small" onClick={deleteOneCardFromBasket}><DeleteOutlineIcon/></StyledDelete>
                        <StyledRestore size='small' onClick={restoreTodo}><RestoreFromTrashIcon/></StyledRestore>
                    </Flex>
                </StyledCard>
            </Grid>
        </>
    );
};

export default BasketCard;