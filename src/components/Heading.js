import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import logo from '../assets/logo.png'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  ></Box>
)

export default function BasicCard() {
  return (
    <Card sx={{ backgroundColor: '#000', color: '#fff' }}>
      <CardContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <img
              src={logo}
              alt="Logo"
              style={{ height: '100px', width: '130px', marginRight: '40px' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" fontFamily="'Orbitron', sans-serif">
              LeaderBoard for E-Cell Game Night 2022
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
