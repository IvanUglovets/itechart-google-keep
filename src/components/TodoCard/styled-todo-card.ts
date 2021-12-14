import styled from "styled-components";
import {Button} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from '@mui/icons-material/Save';
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