import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { USER_ACTIONS } from "../../redux/actions/userActions";

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

        axios.post('/api/template/team', this.state)
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
        const { classes } = this.props;

        return (
            <div>
                <h1>Create Team</h1>
                <p>
                    Now that you have created an account, you are ready to create the team that you will manage.
                </p>
                <p>
                    Enter a team name below and click the button to get started!
                </p>
                <form onSubmit={this.goToQB}>
                    <TextField
                        id="Team"
                        onChange={this.handleInputChange}
                        value={this.state.teamName}
                        label="Team Name"
                        type="Team Name"
                        className={classes.textField}
                        margin="normal"
                        autoComplete="off"
                    />
                    {/* <input type="text" placeholder="Team Name" onChange={this.handleInputChange} value={this.state.teamName} /> */}
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledCreatePage = withStyles(styles)(CreatePage);
export default connect(mapStateToProps)(StyledCreatePage)