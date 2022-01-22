import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
)

export default function BasicCard() {
  return (
    <Card sx={{ backgroundColor: '#000', color: '#fff'}}>
      <CardContent>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography variant="h4" >
          Scoreboard for E-Cell Game Night 2022
        </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
