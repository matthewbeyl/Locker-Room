import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../../redux/actions/playerActions';

const mapStateToProps = state => {
   
}

class QBPage extends Component {

    componentDidMount() {
        this.props.dispatch(fetchPlayers());        
    }

    render() {
        return (
            <div>
                <div>
                    QB PAGE
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(QBPage)