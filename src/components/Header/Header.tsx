import React, {useState} from 'react'
import {Box, Button, IconButton, TextField, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import {StyledTitle, StyledAppBar, Flex, StyledInput} from './styled-header'
import keep from '../../images/keep.png'
import {NavLink} from "react-router-dom";


const Header = () => {
    const [search, setSearch] = useState<string>('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }


    return (
        <Box sx={{flexGrow: 1}}>
            <StyledAppBar position="static">
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <Flex align='center'>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{mr: 2, color: 'black'}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <NavLink to='/'><img src={keep} alt=""/> </NavLink>
                            <StyledTitle>
                                Keep
                            </StyledTitle>
                    </Flex>
                    <Flex align='center' backColor='#f1f3f4' radius='8px'>
                        <Button><SearchIcon sx={{color: "black"}}/></Button>
                        <StyledInput placeholder='Поиск' value={search} onChange={handleSearch}/>
                        { search ? <Button onClick={() => setSearch('')}><ClearIcon sx={{color: "black"}}/></Button> : null}
                    </Flex>
                </Toolbar>
            </StyledAppBar>
        </Box>
    )
}

export default Header