import React from 'react';
import {useStateSelector} from "../../hooks/useStateSelector";
import { Flex } from '../UI-components';
import { StyledTitleCompleted } from './styled-total-completed';



const TotalCompleted = () => {
    const {todos} = useStateSelector(state => state.todos)
    const countCompleted = todos.filter(todo => todo.completed).length
    return (
        <Flex justify='center' align='center'>
            <StyledTitleCompleted>Количество выполненых: {countCompleted}</StyledTitleCompleted>
        </Flex>
    );
};

export default TotalCompleted;