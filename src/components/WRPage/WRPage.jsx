import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWR } from '../../redux/actions/playerActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { TEAM_ACTIONS } from '../../redux/actions/teamActions';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



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

class WRPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            widereceivers: []
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchWR());
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.widereceivers.Players[event.target.value]
        console.log(pickedPlayer);
        this.setState({
            widereceivers: [...this.state.widereceivers, pickedPlayer]
        })
    }

    deleteFromState = (property) => {
        let newState = this.state.widereceivers.filter(player => {
            return player.playerId !== property
        })
        this.setState({
            widereceivers: newState
        })
    }
    goToTe = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.ADD_WRS, payload: this.state })
        this.props.history.push('/te')
    }

    render() {
        const { classes } = this.props;

        let wrList;
        if (this.props.players.widereceivers.Players) {
            wrList = this.props.players.widereceivers.Players.map((WR, index) => {
                return (
                    <MenuItem key={index} value={index}>{WR.displayName}</MenuItem>
                )
            })
        }

        let pickedPlayersList = this.state.widereceivers.map(WR => {
            return <div>
                {WR.displayName} <button onClick={() => this.deleteFromState(WR.playerId)}>REMOVE</button>
            </div>
        })
        return (
            <div>
                <form className={classes.root} autoComplete="off" onSubmit={this.goToTe}>
                    <h1>Select Widereceivers</h1>
                    <FormControl className={classes.formControl}>
                        <Select
                            value=''
                            onChange={this.handleSelect}
                            displayEmpty
                            name="Widereceivers"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {wrList}
                        </Select>
                        <FormHelperText>Select Widereceivers</FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
                {pickedPlayersList}
            </div>
        )
    }
}

const StyledWRPage = withStyles(styles)(WRPage);
export default connect(mapStateToProps)(StyledWRPage);