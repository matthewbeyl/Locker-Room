import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../../redux/actions/playerActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';


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

class QBPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        // this.props.dispatch(fetchPlayers());
    }

    goToRb = (event) => {
        event.preventDefault();
        // this.props.dispatch({ type: 'ADD_PLAYER', payload: this.state.quarterback })
        this.props.history.push('/rb')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.goToRb}>
                    <h1>Select Quarterback(s)</h1>
                    <input type="text" placeholder="Quarterbacks" />
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledQBPage = withStyles(styles)(QBPage);
export default connect(mapStateToProps)(StyledQBPage);