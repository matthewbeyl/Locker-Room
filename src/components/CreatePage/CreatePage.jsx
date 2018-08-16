import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatePage extends Component {

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
            </div>
        )
    }
}

export default connect()(CreatePage)