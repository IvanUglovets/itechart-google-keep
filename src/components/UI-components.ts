import styled from "styled-components";
import {Button, Card} from "@mui/material";


interface IFlexProps {
    direction?: string
    justify?: string
    align?: string
    backColor?: string;
    radius?: string
    width?: string
    margin?: string
}
type textDecoration = {
    decoration: string
}
type contentBottom = {
    content?: string
}


export const StyledTitle = styled.span<textDecoration>`
  letter-spacing: .00625em;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-decoration: ${props => props.decoration || 'none'};
`

export const StyledBody = styled.div<textDecoration>`
  font-family: Roboto,Arial,sans-serif;
  letter-spacing: .01428571em;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-decoration: ${props => props.decoration || 'none'};
`

export const StyledDate = styled.span`
  display: inline-block;
  letter-spacing: .01428571em;
  font-size: .675rem;
  font-weight: 400;
  line-height: 1.25rem;
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


export const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);;
  }
`




export const StyledButton = styled(Button)<contentBottom>`
 color: black;
  min-width: 10px;
  &:hover{
    color: blue;
  }
`
