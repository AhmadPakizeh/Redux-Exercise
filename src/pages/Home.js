import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import ItemList from '../components/ItemList';
import NewItem from '../components/NewItem';

const useStyle = makeStyles({
  root: {
    marginTop: '10rem',
    textAlign: 'center',
  },
});

const Home = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Grid
        flexDirection={'column'}
        justifyContent= 'center'
        spacing={4}
        container
      >
        <Grid flex={1} item>
          <NewItem />
        </Grid>
        <Grid flex={1} item>
          <ItemList />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
