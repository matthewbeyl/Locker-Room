import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRB } from '../../redux/actions/playerActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { TEAM_ACTIONS } from '../../redux/actions/teamActions';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    root: {
        width: '90%',
    },
});

const mapStateToProps = state => ({
    user: state.user,
    players: state.playerReducer
});

class RBPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            runningbacks: []
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchRB());
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.runningbacks.Players[event.target.value]
        console.log(pickedPlayer);
        this.setState({
            runningbacks: [...this.state.runningbacks, pickedPlayer]
        })
    }

    deleteFromState = (property) => {
        let newState = this.state.runningbacks.filter(player => {
            return player.playerId !== property
        })
        this.setState({
            runningbacks: newState
        })
    }

    goToWr = (event) => {
        console.log(this.state);

        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.ADD_RBS, payload: this.state })
        this.props.history.push('/wr')
        console.log(this.state);

    }

    render() {
        const { classes } = this.props;

        let rbList;
        if (this.props.players.runningbacks.Players) {
            rbList = this.props.players.runningbacks.Players.map((RB, index) => {
                return (
                    <MenuItem key={index} value={index}>{RB.displayName}</MenuItem>
                )
            })
        }

        let pickedPlayersList = this.state.runningbacks.map(RB => {
            return <div>
                {RB.displayName} <button onClick={() => this.deleteFromState(RB.playerId)}>REMOVE</button>
            </div>
        })

        return (
            <div>
                <Paper>
                <form className={classes.root} autoComplete="off" onSubmit={this.goToWr}>
                    <h1>Select Runningbacks</h1>
                    <FormControl className={classes.formControl}>
                        <Select
                            value=''
                            onChange={this.handleSelect}
                            displayEmpty
                            name="Runningbacks"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {rbList}
                        </Select>
                        <FormHelperText>Select Runningbacks</FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
                </Paper>
                {pickedPlayersList}
            </div>
        )
    }
}

const StyledRBPage = withStyles(styles)(RBPage);
export default connect(mapStateToProps)(StyledRBPage);