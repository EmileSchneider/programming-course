import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  paper: {
    width: '150%',
  },
  question: {
    margin: 20,
  }
});

class TextFields extends React.Component {
  state = {
    question: 'Ask a question',
  };

  handleChange = question => event => {
    this.setState({
      [question]: event.target.value,
    });
  };

  render() {

    return (
      <form noValidate autoComplete="off">
        <Paper className={styles.paper}>
          <TextField
            id="question"
            className={styles.question}
            value={this.state.question}
            onChange={this.handleChange('question')}
            margin="normal"
            fullWidth
          />
        </Paper>
      </form>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
