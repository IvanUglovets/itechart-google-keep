import React, {FC} from 'react';
import {StyledTitleBasket,DeleteButton} from './styled-title-basket'
import {Flex} from '../UI-components';
import {useStateSelector} from "../../hooks/useStateSelector";
import {useStateDispatch} from "../../hooks/useStateDispatch";
import {deleteAllItemsInBasket} from "../../redux/slices/basketSlice";
import Modal from "../Modal/Modal";





const TitleBasket: FC = () => {
    const [open, setOpen] = React.useState(false);
    const {basketTodos} = useStateSelector(state => state.basket)
    const dispatch = useStateDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteAll = () => {
        dispatch(deleteAllItemsInBasket())
        setOpen(false)
    }


    return (
        <Flex justify='center'>
            <StyledTitleBasket>Корзина</StyledTitleBasket>
            {basketTodos.length > 0 ? <Flex justify='center' align='center' margin='0 0 0 1rem'>
                <DeleteButton size='small' onClick={handleClickOpen}>Очистить корзину</DeleteButton>
            </Flex> : null}
            <Modal open={open} handleClose={handleClose} deleteAll={deleteAll}/>
        </Flex>
    );
};

export default TitleBasket;