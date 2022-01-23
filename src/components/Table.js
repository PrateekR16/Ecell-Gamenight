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

export default function BasicTable() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const params = useParams();
  let sheet_no = params.number
  let url = `https://sheets.googleapis.com/v4/spreadsheets/1digOYBypnO4-5ZtCibBfbULwEkSllpNNG8ZMduBqkME/values/Sheet${sheet_no}!A1:c10?key=AIzaSyB2oGgTTFbend-RafhynufvPhKflY7O8OI`

  console.log(url);

  useEffect(() => {

    const getData = async () => {
      let res = await axios.get(url)

      let values = res.data.values;
      console.log(values);
      setData(values)
      setLoading(false)
    }

    getData()
  }, [])

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
                {row.map((item) => {
                  return <TableCell align="center"><Typography>
                    {item}
                  </Typography></TableCell>
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
