import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import logo from '../assets/logo.png'

export default function BasicCard() {
  let navigate = useNavigate()
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
          <div
            onClick={(e) => {
              navigate(`/`)
            }} className="logo"
          >
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
