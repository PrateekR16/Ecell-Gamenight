import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function ButtonAppBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{backgroundColor: 'black',justifyContent: 'center'}}>
                        <Button sx={{margin : '0.5em'}} variant='outlined' color='warning'>Room 1</Button>
                        <Button sx={{margin : '0.5em'}} variant='outlined' color='warning'>Room 2</Button>
                        <Button sx={{margin : '0.5em'}} variant='outlined' color='warning'>Room 3</Button>
                        <Button sx={{margin : '0.5em'}} variant='outlined' color='warning'>Room 4</Button>
                        <Button sx={{margin : '0.5em'}} variant='outlined' color='warning'>Room 5</Button>
                        <Button sx={{margin : '0.5em'}} variant='outlined' color='warning'>Room 6</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
