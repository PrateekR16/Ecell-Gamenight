import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { motion } from 'framer-motion'
import '../index.css'

export default function BasicTable() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [text, setText] = useState('');
 
  const params = useParams();
  let sheet_no = params.number
  useEffect(() => {
    let url = `https://sheets.googleapis.com/v4/spreadsheets/1digOYBypnO4-5ZtCibBfbULwEkSllpNNG8ZMduBqkME/values/Sheet${sheet_no}!A69:D78?key=AIzaSyB2oGgTTFbend-RafhynufvPhKflY7O8OI`
    const getData = async () => {
      let res = await axios.get(url)

      let values = res.data.values
      setData(values)
      setLoading(false)
    }
    getData()
  }, [sheet_no])

  useEffect(() => {
    setText(`Scores for Room ${sheet_no}`)
    console.log(sheet_no)
  }, [sheet_no])
  
  
  if (isLoading) {
    return (
      <Box display="flex"
        alignItems="center"
        justifyContent="center"
        height={"100%"}
        marginTop={"20em"}
        width={"100%"}>
        <CircularProgress color='warning' />
      </Box>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '	#202020',
        height: '100%',
      }}
    >
      <Box
        sx={{ width: '50vw', alignItems: 'center', justifyContent: 'center' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '	#202020',
          }}
        >
          <Typography
            variant="h4"
            fontFamily="'Orbitron', sans-serif"
            color="#C8C8C8"
            alignItems="center"
            marginBottom="10px"
          >
            {text}
          </Typography>
        </div>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: '1000px',
            maxHeight: '620px',
            '&::-webkit-scrollbar': {
              height: 0,
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'black',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#C8C8C8',
              color: 'black',
              borderRadius: '10px',
              outline: '1px solid slategery',
              '-webkit-box-shadow': 'inset 0 0 6px rgba(8,8,8,0.0)',
            },
          }}
        >
          <Table sx={{ minWidth: 750 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#101010' }}>
                <TableCell align="center">
                  <Typography
                    variant="h5"
                    fontFamily="'Orbitron', sans-serif"
                    color="#C8C8C8"
                  >
                    Teams
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="h5"
                    fontFamily="'Orbitron', sans-serif"
                    color="#C8C8C8"
                  >
                    Team Name
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="h5"
                    fontFamily="'Orbitron', sans-serif"
                    color="#C8C8C8"
                  >
                    Total
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="h5"
                    fontFamily="'Orbitron', sans-serif"
                    color="#C8C8C8"
                  >
                    Rank
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.rank}
                  component={motion.div}
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.3 },
                    backgroundColor: '#FF5F1F',
                  }}
                  sx={{
                    backgroundColor: '#101010',
                  }}
                >
                  {row.map((item) => {
                    return (
                      <TableCell align="center">
                        <Typography
                          variant="h6"
                          color="#C8C8C8"
                          fontFamily="'Orbitron', sans-serif"
                        >
                          {item}
                        </Typography>
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}
