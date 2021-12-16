import styled from "styled-components";
import {Button} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from '@mui/icons-material/Save';
import {StyledButton} from "../UI-components";

export const StyledEditButton = styled(Button)`
  padding: 0;
  min-width: 0;
  margin-left: 1rem;
  margin-bottom: 5px;
`
export const Edit = styled(EditIcon)`
  width: 20px;
  height: 20px;
`

export const Save = styled(SaveIcon)`
  width: 20px;
  height: 20px;
  margin-top: 10px;
`

export const StyledToBasket = styled(StyledButton)`
  display: block;
  line-height: 0;
  position: relative;
  &:hover::after {
    content: 'В корзину';
    text-transform: capitalize;
    line-height: 1;
    position: absolute;
    top: 90%;
    left: -59%;
    font-size: 10px;
    display: inline-block;
    background-color: #f1f3f4;
    color: black;
    padding: 1rem 1rem;
    border-radius: 8px;
  }
`