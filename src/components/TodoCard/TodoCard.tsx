import React, {FC, useState} from "react";
import {Button, Card, CardActions, CardContent, Checkbox, Grid, Typography} from "@mui/material";
import {ITodo} from "../../models/interfaces/ITodos";
import styled from "styled-components";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {IPropsTodoCard} from "./IPropsTodoCard";
import {useStateDispatch} from "../../hooks/useStateDispatch";
import {deleteTodo} from "../../redux/slices/fetchSlice";

const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);;
  }
`
const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const StyledTitle = styled.span`
  letter-spacing: .00625em;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`

const StyledBody = styled.div`
  letter-spacing: .01428571em;
  font-family: Roboto,Arial,sans-serif;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.25rem;
`


const TodoCard: FC<IPropsTodoCard> = ({todo}) => {
    const dispatch = useStateDispatch()
    const {id,title, body, completed} = todo

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(id))
    }

    return (
        <Grid item>
            <StyledCard>
                <CardContent>
                    <StyledTitle>
                        {title}
                    </StyledTitle>
                    <StyledBody>
                        {body}
                    </StyledBody>
                </CardContent>
                <StyledCardActions>
                    <Button size="small" sx={{color: 'black',minWidth: '10px'}} onClick={handleDeleteTodo}><DeleteOutlineIcon/></Button>
                    <Checkbox checked={completed} />
                </StyledCardActions>
            </StyledCard>
        </Grid>
    )
}

export default TodoCard