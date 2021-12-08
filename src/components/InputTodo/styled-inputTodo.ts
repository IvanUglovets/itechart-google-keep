import styled from "styled-components";
import Fab from "@mui/material/Fab";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export const StyledInput = styled.input.attrs(({type}) => ({
    type: type || "text"
}))`
  padding: 11px 1rem;
  border: none;
  outline: none;
  background-color: #f1f3f4;
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
`

export const StyledTextArea = styled.textarea`
  font-family: 'Roboto', sans-serif;
  outline: none;
  background-color: #f1f3f4;
  padding: 1rem 1rem;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  resize: none;
  border: none;
  border-radius: 8px;
`

export const StyledForm = styled.form`
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  background-color: #f1f3f4;

`

export const SubmitButton = styled(Fab)`
  position: absolute;
  right: -1rem;
  bottom: -1rem;

  &:hover {
    background-color: yellow;
    color: green;
  }
`