import styled from "styled-components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {Link} from "react-router-dom";

export const IconBasket = styled(DeleteOutlineIcon)`
  margin-bottom: 5px;
  width: 50px;
  height: 50px;
  padding: 10px;
  fill: black;
  transition: .3s;
  &:hover{
    border-radius: 50%;
    background-color: #FDFF47;
  }
`

export const LinkToBasket = styled(Link)`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  
  &:hover::after {
    content: 'Корзина';
    background-color: #f1f3f4;
    color: black;
    padding: 5px 1rem;
    border-radius: 8px;
  }
`