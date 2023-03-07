import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Button, TextField } from '@mui/material';

export default function BasicList() {

    function add(){

        alert("You are adding!");

    }

    function remove(){

        alert("You are removing!");

    }


  return (
    <Box sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>

        <TextField label="Name" variant="outlined" sx={{width: "100%", marginBottom: 1}} />
        <Button variant="contained" sx={{width: "100%", marginBottom: 1}} onClick={(e) => { add() }}>
            Add
        </Button>

      <Divider />

      <nav aria-label="secondary mailbox folders">
        
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={(e) => remove()}>
              <ListItemText primary="Item #0" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}