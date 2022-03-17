import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';
import NewItemForm from './NewItemForm';

const useStyle = makeStyles({
  root: {
    margin: '1rem 2rem ',
    padding: '1rem .75rem',
    minHeight: '5rem',
     background: 'linear-gradient(90deg,  #dbdbdb 30%, #f3f3f3 70%)',
  },
 grid_container: {
    margin: '1rem 0 ',
  },
})

function NewItem() {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <NewItemForm />
    </Paper>
  );
}

export default NewItem;
