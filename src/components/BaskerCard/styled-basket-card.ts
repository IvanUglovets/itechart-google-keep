import styled from "styled-components";
import {StyledButton} from "../UI-components";


export const StyledRestore = styled(StyledButton)`
   display: block;
   &:hover::after {
     content: 'Восстановить';
     text-transform: capitalize;
     position: absolute;
     top: 90%;
     left: -100%;
     font-size: 10px;
     display: block;
     background-color: #f1f3f4;
     color: black;
     padding: 5px 1rem;
     border-radius: 8px;
   }
 `

export const StyledDelete = styled(StyledRestore)`
  &:hover::after{
    content: 'Удалить';
    left: -53%;
  }
`

