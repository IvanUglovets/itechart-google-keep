import React from 'react';
import {useStateSelector} from "../../hooks/useStateSelector";
import {Grid} from "@mui/material";
import {ITodo} from "../../models/interfaces/ITodos";
import BasketCard from "../BaskerCard/BasketCard";
import {Flex} from '../UI-components';
import { BasketEmpty, StyledImg } from './styled-basket-list';




const BasketList = () => {
    const {basketTodos} = useStateSelector(state => state.basket)
    const {search} = useStateSelector(state => state.search)
    const filterBasketTodos = basketTodos.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
        {
        basketTodos.length > 0 ?
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    direction="row"
                    justifyContent="flex-start"
                    sx={{mt: '2rem'}}
                >
                    {filterBasketTodos && filterBasketTodos.map((item: ITodo) => <BasketCard key={item.id}
                                                                                             item={item}/>)}
                </Grid>
                :
                <Flex justify='center' align='center' direction='column'>
                    <StyledImg />
                    <BasketEmpty>В корзине ничего нет!</BasketEmpty>
                </Flex>
        }
        </>
    );
};

export default BasketList;