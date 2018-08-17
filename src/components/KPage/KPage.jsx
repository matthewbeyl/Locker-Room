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

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchK());
    }

    // propName and await??
    // handleSelect = propName => async(event) => {
    //     console.log(event.target.value);
    //     await this.setState({
    //         [propName]: event.target.value,
    //     })
    //     console.log(this.state);
    // }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.kickers.Players[event.target.value]
        console.log(pickedPlayer);
    }

    goToDef = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.SELECT_PLAYER, payload: this.state })
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
        return (
            <div>
                <form onSubmit={this.goToDef}>
                    <h1>Select Kickers</h1>
                    <select onChange={this.handleSelect}>
                        {kList}
                    </select>
                    <select onChange={this.handleSelect}>
                        {kList}
                    </select>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledKPage = withStyles(styles)(KPage);
export default connect(mapStateToProps)(StyledKPage);