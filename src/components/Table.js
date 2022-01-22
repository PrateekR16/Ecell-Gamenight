import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function BasicTable() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    
    const getData = async () => {
      let res = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1digOYBypnO4-5ZtCibBfbULwEkSllpNNG8ZMduBqkME/values/Sheet1!A1:c10?key=AIzaSyB2oGgTTFbend-RafhynufvPhKflY7O8OI')

      let values = res.data.values;
      console.log(values);
      setData(values)
      setLoading(false)
    }
    
    getData()
  },[])

  if(isLoading)
  {
    return(
      <div>Loading....</div>
    )
  }

  return (
    <Box sx={{ width: "50vw", alignItems: "center", justifyContent: "center" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.rank}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {row.map((item) =>{
                  return <TableCell align="center">{item}</TableCell>
                } )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
