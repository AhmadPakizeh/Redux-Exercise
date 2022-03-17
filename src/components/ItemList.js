import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

function ItemList() {
  const state = useSelector((state) => state);
  return (
    <Grid container>
      {state.map((item) => (
        <Item
          name={item.name}
          nation={item.nation}
          number={item.number}
          post={item.post}
          key={item.id}
          id={item.id}
        />
      ))}
    </Grid>
  );
}

export default ItemList;
