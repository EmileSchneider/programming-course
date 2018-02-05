import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import BtmNavPresentation from '../BtmNavPresentation';

const styles = theme => ({
  card: {
  },
  content: {
    minWidth: 275,
    minHeight: 450,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    color: theme.palette.text.primary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  nav: {
    textAlign: 'center',
  }
});

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography className={classes.title}>Day 1</Typography>
          <div>
            <h1>Abstraction as a magic trick</h1>
            <p>Lorem ipsum</p>
            <img src="http://via.placeholder.com/350x250" />
          </div>
        </CardContent>
        <CardActions className={classes.nav}>
          <Button size="small">Previous Slide</Button>
          <Button size="small">Current Slide</Button>
          <Button size="small">Next Slide</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
