import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchK } from '../../redux/actions/playerActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { TEAM_ACTIONS } from '../../redux/actions/teamActions';

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
        let kList;
        if (this.props.players.kickers.Players) {
            kList = this.props.players.kickers.Players.map((K, index) => {
                return(
                    <option key={index} value={index}>{K.displayName}</option>
                )
            })
        }

        let pickerPlayersList = this.state.kickers.map(K => {
            return <div>
                {K.displayName} {/*<button onClick={() => this.deleteFromState(K.playerId)}>DELETE</button> */}
            </div>
        })
        return (
            <div>
                <form onSubmit={this.goToDef}>
                    <h1>Select Kickers</h1>
                    <select onChange={this.handleSelect}>
                        {kList}
                    </select>
                    {pickerPlayersList}
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledKPage = withStyles(styles)(KPage);
export default connect(mapStateToProps)(StyledKPage);