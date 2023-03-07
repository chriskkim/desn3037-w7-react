import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { define } from '../store/InputForm'


export default function BasicTextFields() {

  const name = useSelector(state => state.input.name)
  const email = useSelector(state => state.input.email)
  const bio = useSelector(state => state.input.bio)
  const input = useSelector(state => state.input)
  const dispatch = useDispatch()

  function Update(name, value){

    const payload = {}
    payload.name = name;
    payload.value = value;


    console.log(value);

    dispatch(define(payload));

  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Name" variant="outlined" defaultValue={name} onChange={(e) => Update("name", e.target.value)} />
      <TextField label="Email" variant="outlined" defaultValue={email} onChange={(e) => Update("email", e.target.value) } />
      <TextField label="Bio" variant="outlined" defaultValue={bio} onChange={(e) =>  Update("bio", e.target.value)} />

      <span>

        {JSON.stringify(input)}

      </span>
    </Box>
  );
}