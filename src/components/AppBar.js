import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function ButtonAppBar() {
    const navigate = useNavigate();
    let rooms = [1, 2, 3, 4, 5, 6]
    const [number, setNumber] = useState(1);
    function refreshPage() {
        window.location.reload();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ backgroundColor: 'black', justifyContent: 'center',display : 'flex',}}>

                    {rooms.map((room) => {
                        return (
                            <Link className="link" to={`/room/${number}`} onDoubleClick={refreshPage} onClick={() => setNumber(room)}><Button sx={{ margin: '1.2em 2.5em',borderRadius:'10px', width : '9em'}} variant='outlined' color='warning'>Room {room}</Button></Link>
                        )
                    })}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
