import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav'

import { USER_ACTIONS } from "../../redux/actions/userActions";

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
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
});

const mapStateToProps = state => ({
    user: state.user,
});

class PlayerPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }

    render() {
        const { classes } = this.props;
        let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
           <h1>Player Page</h1> 
        </div>
      );
    }

        return (
            <div>
                {content}
            </div>
        )
    }
}

const StyledPlayerPage = withStyles(styles)(PlayerPage);
export default connect(mapStateToProps)(StyledPlayerPage)