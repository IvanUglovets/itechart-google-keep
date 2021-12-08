import styled from "styled-components";
import {AppBar, TextField} from "@mui/material";

interface IFlexProps {
    direction?: string
    justify?: string
    align?: string
    backColor?: string;
    radius?: string
    width?: string
    margin?: string
}


export const StyledAppBar = styled(AppBar)`
  background: #fff;
`
export const StyledTitle = styled.span`
  color: #5f6368;
  display: inline-block;
  font-size: 22px;
  line-height: 24px;
  margin: 0 1rem;
`

export const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  background-color: ${props => props.backColor};
  border-radius: ${props => props.radius};
  width: ${props => props.width || 'auto'};
  margin: ${props => props.margin};
`

export const StyledInput = styled.input`
  padding: 11px 0;
  border: none;
  outline: none;
  background-color: #f1f3f4;
`