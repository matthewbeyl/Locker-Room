import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { fetchTE } from '../../redux/actions/playerActions';

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
    tightends: state.tightends
});

class TEPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchTE());
    }

    goToK = (event) => {
        event.preventDefault();
        // this.props.dispatch({ type: 'ADD_PLAYER', payload: this.state.tightend })
        this.props.history.push('/k')
    }

    render() {
        let teList;
        if (this.props.tightends.tightends.Players) {
            teList = this.props.tightends.tightends.Players.map((TE, index) => {
                return (
                    <option value="TE" key={index}>{TE.displayName}</option>
                )
            })
        }
        return (
            <div>
                <form onSubmit={this.goToK}>
                    <h1>Select Tight End(s)</h1>
                    <select>
                        {teList}
                    </select>
                    <select>
                        {teList}
                    </select>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledTEPage = withStyles(styles)(TEPage);
export default connect(mapStateToProps)(StyledTEPage);