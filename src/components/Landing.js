import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TypeWriterEffect from 'react-typewriter-effect'

export default function BasicCard() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginTop: '150px',
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          backgroundColor: 'transparent',
          shadow: 'none',
          height: '100%',
        }}
        elevation="0"
      >
        <CardContent>
          <TypeWriterEffect
            textStyle={{
              fontFamily: "'Orbitron', sans-serif",
              color: '#C8C8C8',
              textAlign: 'center',
              fontWeight: 500,
              // fontSize: '1.5em',
            }}
            startDelay={1000}
            cursorColor="#3F3D56"
            multiText={[
              'Welcome to E-Cell Game Night 2022!',
              "Check out your teams' rank by clicking on the respective room.",
            ]}
            multiTextDelay={2000}
            typeSpeed={30}
          />
          {/* <TypeWriterEffect
            textStyle={{
              fontFamily: "'Orbitron', sans-serif",
              color: '#C8C8C8',
              textAlign: 'center',
            }}
            startDelay={6000}
            cursorColor="#C8C8C8"
            text="Check out your teams' rank by clicking on the respective room."
            typeSpeed={100}
          /> */}
        </CardContent>
      </Card>
    </div>
  )
}
