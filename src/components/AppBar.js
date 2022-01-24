import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'


export default function ButtonAppBar() {
  let navigate = useNavigate()
  let rooms = [1, 2, 3, 4, 5, 6]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: 'black',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          {rooms.map((room, index) => {
            return (
              <Button
              key = {index}
                sx={{
                  margin: '0em 2em 2em 1.2em',
                  borderRadius: '10px',
                  width: '9em',
                }}
                variant= "outlined"
                color="warning"
                onClick={(e) => {
                  navigate(`/room/${room}`)
                }}
              >
                <Typography fontFamily="'Orbitron', sans-serif">
                  Room {room}
                </Typography>
              </Button>
            )
          })}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
