import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
    fontSize: 25,
  },
  Button: {
    fontSize: 15,
  },

};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button className={classes.Button} color="inherit">Code</Button>
          <Button className={classes.Button} color="inherit">Presentation</Button>
          <Button className={classes.Button} color="inherit">Roadmap</Button>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Programming-Course
          </Typography>

          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar)
