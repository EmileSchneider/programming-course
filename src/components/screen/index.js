import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import Presentation from '../Presentation';
import Question from '../Question'; 

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  code: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  presentation: {
    padding: 16,
    height: 400,
  },
  questions: {
    padding: 16,
    textAlign: 'center'
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
      <Grid item xs={8}>
          <Presentation />
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.code}>{'interactive Code'}</Paper>
        </Grid>
        <Grid itm xs={3}>
        </Grid>
        <Grid item xs={6}>
          <Question />
        </Grid>
        <Grid itm xs={3}>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
