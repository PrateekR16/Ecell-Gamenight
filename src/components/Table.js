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
function createData(rank, teamName, points) {
  return { rank, teamName, points };
}

const rows = [
  createData(1, 'Team Name1', 500),
  createData(2, 'Team Name2', 400),
  createData(3, 'Team Name3', 200),
  createData(4, 'Team Name4', 300),
  createData(5, 'Team Name5', 100),
];

export default function BasicTable() {
  useEffect(() => {

    const getData = async () => {
      let res = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1digOYBypnO4-5ZtCibBfbULwEkSllpNNG8ZMduBqkME/values/Sheet1!A1:c10?key=AIzaSyB2oGgTTFbend-RafhynufvPhKflY7O8OI')

      let data = res.data.values[0][1];
      console.log(data);
    }

    getData()
  })
  return (
    <Box sx={{ width: "50vw", alignItems: "center", justifyContent: "center" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell align="center">Team Name</TableCell>
              <TableCell align="right">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.rank}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.rank}
                </TableCell>
                <TableCell align="center">{row.teamName}</TableCell>
                <TableCell align="right">{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
