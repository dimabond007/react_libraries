/* eslint-disable no-unreachable */
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export function TodoStatistics(props) {
  const { todos } = props;

  const completedCount = todos.filter((todo) => todo.isComplete).length;
  const activeCount = todos.length - completedCount;

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="h6" component="div">
                Statistics
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Total
            </TableCell>
            <TableCell>{todos.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Active
            </TableCell>
            <TableCell>{activeCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Completed
            </TableCell>
            <TableCell>{completedCount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div>
      <h2>Statistics</h2>
      <div>
        <p>Total: {todos.length}</p>
        <p>Active: {activeCount}</p>
        <p>Completed: {completedCount} </p>
      </div>
    </div>
  );
}
