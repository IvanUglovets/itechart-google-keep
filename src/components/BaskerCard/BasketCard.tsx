import React, {FC} from 'react';
import {ITodo} from "../../models/interfaces/ITodos";
import {StyledTitle, StyledBody, StyledButton, StyledCard, StyledDate, Flex} from '../UI-components'
import {CardContent, Grid} from "@mui/material";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useStateDispatch} from "../../hooks/useStateDispatch";
import {addTodo} from "../../redux/slices/todoSlice";
import {deleteOneCard} from "../../redux/slices/basketSlice";

interface IPropsBasketCard {
    item: ITodo
}

// const StyledRestore = styled(StyledButton)`
//   position: relative;
//   display: block;
//   &:hover::after {
//     content: 'Восстановить';
//     position: absolute;
//     text-transform: capitalize;
//     font-size: 10px;
//     display: block;
//     color: black;
//     padding: 5px 1rem;
//     border-radius: 8px;
//   }
//
// `


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
            <Grid item position='relative'>
                <StyledCard>
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
                        <StyledButton size='small' onClick={restoreTodo}><RestoreFromTrashIcon/></StyledButton>
                    </Flex>
                </StyledCard>
            </Grid>
        </>
    );
};

export default BasketCard;