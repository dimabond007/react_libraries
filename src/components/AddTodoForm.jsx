/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export function AddTodoForm(props) {
  const { onSubmit, newTitleInputRef } = props;

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        mx: "auto",
      }}
    >
      <TextField
        label="Enter todo title..."
        variant="outlined"
        required
        inputRef={newTitleInputRef}
        sx={{
          flex: 1,
          "& .MuiInputLabel-asterisk": {
            display: "none", // Скрываем звездочку
          },
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
  return (
    <form onSubmit={onSubmit} className="add-todo-form">
      <input
        ref={newTitleInputRef}
        type="text"
        placeholder="Enter todo title..."
      />
      <button className="btn">Add</button>
    </form>
  );
}
