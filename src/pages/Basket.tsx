import React from "react";
import {Container} from "@mui/material";
import TitleBasket from "../components/TitleBasket/TitleBasket";
import BasketList from "../components/BasketList/BasketList";


const Basket = () => {
    return (
        <Container maxWidth='lg'>
            <TitleBasket/>
            <BasketList />
        </Container>
    )
}

export default Basket