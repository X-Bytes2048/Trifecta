import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <p>hi</p>
              </Grid>
              <Grid item xs={4}>
                <p>hi2</p>
              </Grid>
              <Grid item xs={4}>
                <p>hi3</p>
              </Grid>
              <Grid item xs={8}>
                <p>hi4</p>
              </Grid>
            </Grid>
        </Box>
      </div>
    );
  }
}

export default App;
