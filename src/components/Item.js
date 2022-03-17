import {
  Paper,
  Typography,
  Grid,
  IconButton,
  Divider,
  Box,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildIcon from '@mui/icons-material/Build';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PublicIcon from '@mui/icons-material/Public';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { countryList, postList } from './NewItemForm';
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch } from 'react-redux';
import { editItem, removeItem } from '../store/Actions/football.action';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem 3rem',
    padding: '.75rem 1rem',
    background: 'linear-gradient(90deg, #bf0000 30%,  #006b9f 70%)',
    [theme.breakpoints.down('md')]: {
      margin: '1rem .25rem',
      textAlign: 'center',

      
    },
  },
  number: {
    fontSize: '6rem !important',
    textAlign: 'center',
  },

  content_container: {
    display: 'flex',
    margin: '1rem 0 ',
    padding: '0 .5rem',
    textAlign: 'center',
  },
  txt: {
    padding: '0 .5rem',
    textAlign: 'center',
  },
  actions_container: {
    margin: '.5rem 2rem ',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  input_number: {
    fontSize: '5rem !important',
    textAlign: 'center',
  },
  inputs: {
    margin: '0 .5rem .5rem .5rem !important',
    top: '-3px',
    textAlign: 'center',
  },
}));

function Item({ name, number, nation, post, id }) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    number: number,
    name: name,
    nation: nation,
    post: post,
  });

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSaveEdit = () => {
    dispatch(
      editItem({
        id,
        ...formValue,
      })
    );
    handleToggleEditMode();
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const [editMode, setEditMode] = useState(false);
  return (
    <Grid item xs={12} sm={6}>
      
      <Paper className={classes.root}>
        {editMode ? (
          <TextField
            value={formValue.number}
            onChange={handleChange}
            name='number'
            inputProps={{
              className: classes.input_number,
            }}
          />
        ) : (
          <Typography
           // onDoubleClick={handleToggleEditMode}
            className={classes.number}
          >
            {number}
          </Typography>
        )}

        <Divider />

        <Box className={classes.content_container}>
          <AccountCircleIcon />
          {editMode ? (
            <TextField
              className={classes.inputs}
              fullWidth
              variant='standard'
              size='medium'
              name='name'
              onChange={handleChange}
              value={formValue.name}
              
            />
          ) : (
            <Typography className={classes.txt}>{name} </Typography>
          )}
        </Box>

        <Box className={classes.content_container}>
          <PublicIcon />
          {editMode ? (
            <Select
              size='small'
              variant='standard'
              fullWidth
              value={formValue.nation}
              label='ٔNation'
              name='nation'
              className={classes.inputs}
              onChange={handleChange}
            >
              {countryList.map((item, _index) => (
                <MenuItem key={_index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          ) : (
            <Typography className={classes.txt}>{nation}</Typography>
          )}
        </Box>

        <Box className={classes.content_container}>
          <SportsSoccerIcon />
          {editMode ? (
            <Select
              className={classes.inputs}
              size='small'
              variant='standard'
              fullWidth
              value={formValue.post}
              label='ٔpost'
              name='post'
              onChange={handleChange}
            >
              {postList.map((item, _index) => (
                <MenuItem key={_index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          ) : (
            <Typography className={classes.txt}>{post}</Typography>
          )}
        </Box>

        <Divider />

        <Box className={classes.actions_container}>
          {editMode ? (
            <IconButton onClick={handleSaveEdit} color='primary'>
              <SaveIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleToggleEditMode} color='primary'>
              <BuildIcon />
            </IconButton>
          )}
          <IconButton color='error' onClick={() => handleRemoveItem(id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
        
      </Paper>
    </Grid>
  );
}

export default Item;
