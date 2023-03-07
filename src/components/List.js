import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useSelector, useDispatch } from 'react-redux'
import { Button, TextField } from '@mui/material';
import { add, define, remove } from "../store/List";

export default function BasicList() {

    const names = useSelector(state => state.list.names);
    const field = useSelector(state => state.list.field);

    const dispatch = useDispatch()

    function Update(name, value) {

        const payload = {}
        payload.name = name;
        payload.value = value;

        dispatch(define(payload));

    }

    function addToList() {

        Update("field", "");
        dispatch(add(field));

    }

    function removeFromList(i) {

        dispatch(remove(i));

    }


    return (
        <Box sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>

            <TextField label="Name" variant="outlined" sx={{ width: "100%" }} value={field} onChange={(e) => Update("field", e.target.value)} />

            <Button sx={{ width: "100%", marginTop: 1 }} onClick={(e) => {addToList()}}>
                Add
            </Button>

            <nav aria-label="secondary mailbox folders">
                <List>


                    {names.map((o, i) =>


                        <ListItem disablePadding key={i}  onClick={(e) => {removeFromList(i)}}>
                            <ListItemButton>
                                <ListItemText primary={i + ": " + o} />
                            </ListItemButton>
                        </ListItem>

                    )}




                </List>
            </nav>
        </Box>
    );
}