import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class CreatePage extends Component {

    goToQB = (event) => {
        event.preventDefault();
        this.props.history.push('/qb')
    }

    render() {

        return (
            <div>
                <h1>Create Team</h1>
                <p>
                    Welcome to Locker Room! Now that you have created an account, the next step is to choose your team.
                    Because there is such variance in leagues, you can choose as many players as you would like. The default
                    settings will have you building a team of 16 players.
                </p>
                <p>
                    Enter a team name below and click the button to get started!
                </p>
                <form onSubmit={this.goToQB}>
                    <input type="text" placeholder="Team Name" />
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledCreatePage = withStyles(styles)(CreatePage);
export default connect()(StyledCreatePage)