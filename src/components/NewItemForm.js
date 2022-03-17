import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Select,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { addNewItem } from '../store/Actions/football.action';

export const countryList = [
    'Argentina',
    'Portugal',
    'Brazil', 
    'Iran',
    'England',
    'Spain',
   'Italy',
    'France',
    'Germanny',
    'America',
    'England',
    'Qatar',
    'France',
    'China',
    'Emarat',
 ];

export const postList = [
  'Goalkeeper',
  'Right Full-back (Wingback)',
  'Left Full-back (Wingback)',
  'Center-back ',
  'Center back (sweeper)',
  'Defensive Midfielder',
  'Right Midfielder (Winger)',
  'Center Midfielder',
  'Center Forward (Striker)',
  'Attacking Midfielder (Center Forward)',
  'Left Midfielder (Winger)',
];

const useStyle = makeStyles({
  root: {
    margin: '1rem 2rem ',
    padding: '1rem .75rem',
    minHeight: '5rem',
  },
  grid_container: {
    margin: '1rem 0 ',
  },
  form_control: {
    minWidth: '9rem !important',
    margin: '.25rem .5rem !important',
  },
  input: {
    margin: '.25rem .5rem !important',
  },
});
export const isFormValide = (values) => {
  for (const item in values) {
    if (values[item] === '') {
      return false;
    }
  }
  return true;
};

function NewItemForm() {
  const [formValue, setFormValue] = useState({
    number: '',
    name: '',
    nation: '',
    post: '',
  });
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    isFormValide(formValue) &&
      dispatch(
        addNewItem({
          id: Date.now(),
          ...formValue,
        })
      );
  };
  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const classes = useStyle();
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        className={classes.grid_container}
        justifyContent={'space-around'}
      >

        <TextField
          name='name'
          className={classes.input}
          onChange={handleChange}
          value={formValue.name}
          label='Name'
          variant='outlined'
        />

        <FormControl className={classes.form_control}>

          <InputLabel>Nation</InputLabel>
          <Select
            value={formValue.nation}
            label='ٔNation'
            name='nation'
            onChange={handleChange}
          >
            {countryList.map((item, _index) => (
              <MenuItem key={_index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid
        className={classes.grid_container}
        container
        justifyContent={'space-around'}
      >
        <TextField
          className={classes.input}
          value={formValue.number}
          name='number'
          label='Number'
          type={'number'}
          variant='outlined'
          onChange={handleChange}
        />

        <FormControl className={classes.form_control}>
          <InputLabel>Position</InputLabel>
          <Select
            value={formValue.post}
            label='ٔPosition'
            name='post'
            onChange={handleChange}
          >
            {postList.map((item, _index) => (
              <MenuItem key={_index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid
        className={classes.grid_container}
        container
        justifyContent={'space-around'}
      >
        <Button type='submit' variant='contained' color='success'>
          Add
        </Button>
      </Grid>
    </form>
  );
}

export default NewItemForm;
