import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchK } from '../../redux/actions/playerActions';
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
});

  const mapStateToProps = state => ({
    user: state.user,
    players: state.playerReducer
  });

class KPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            kickers: []
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchK());
    }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.kickers.Players[event.target.value]
        console.log(pickedPlayer);
        this.setState({
            kickers: [...this.state.kickers, pickedPlayer]
        })
    }

    deleteFromState = (property) => {
        let newState = this.state.kickers.filter(player => {
            return player.playerId !== property
        })
        this.setState({
            kickers: newState
        })
    }

    goToDef = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.ADD_KS, payload: this.state })
        this.props.history.push('/def')
    }

    render() {
        const { classes } = this.props;

        let kList;
        if (this.props.players.kickers.Players) {
            kList = this.props.players.kickers.Players.map((K, index) => {
                return(
                    <MenuItem key={index} value={index}>{K.displayName}</MenuItem>
                )
            })
        }

        let pickedPlayersList = this.state.kickers.map(K => {
            return <div>
                {K.displayName} {/*<button onClick={() => this.deleteFromState(K.playerId)}>DELETE</button> */}
            </div>
        })
        return (
            <div>
                <form className={classes.root} autoComplete="off" onSubmit={this.goToDef}>
                    <h1>Select Kickers</h1>
                    <FormControl className={classes.formControl}>
                        <Select
                            value=''
                            onChange={this.handleSelect}
                            displayEmpty
                            name="Kickers"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {kList}
                        </Select>
                        <FormHelperText>Select Kickers</FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form> 
                {pickedPlayersList}
            </div>
        )
    }
}

const StyledKPage = withStyles(styles)(KPage);
export default connect(mapStateToProps)(StyledKPage);