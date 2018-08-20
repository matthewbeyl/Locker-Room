import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { USER_ACTIONS } from "../../redux/actions/userActions";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

const mapStateToProps = state => ({
    user: state.user,
});

class CreatePage extends Component {
    
    constructor() {
        super();
        this.state = {
            teamName: ''
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    handleInputChange = (event) => {
        this.setState({
            teamName: event.target.value
        })
    }

    postTeamName = () => {
        console.log(this.state.teamName);
        
        axios.post('/api/template', this.state)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log('Error: ', error);
            })
    }

    goToQB = (event) => {
        event.preventDefault();
        this.postTeamName();
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
                    <input type="text" placeholder="Team Name" onChange={this.handleInputChange} value={this.state.teamName} />
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledCreatePage = withStyles(styles)(CreatePage);
export default connect(mapStateToProps)(StyledCreatePage)