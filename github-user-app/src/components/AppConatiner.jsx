import React, { Component } from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gitHubUsers: []
        }
    }

    // Hook into component mount and do initial fetch as soon as component mounted
    componentDidMount() {
        this.loadData();
    }

    // Fetch from web service (use promises and the async/await)
    loadData = async () => {
        console.log(`Trying to fetch School data`);
        const response = await fetch('https://api.github.com/users?client_id=1cb51b2524b467bb3455&client_secret=12a719d7ee5465e6105bb8fc92571d821068cb65');
        const json = await response.json();
        this.setState({ gitHubUsers: json });
    }

    // Method render this component
    render() {
        return (
            this.state.gitHubUsers.map((user, idx) => {
                return (
                    <div key={idx}>
                        <p>{user.login}</p>
                        <img src={user.avatar_url} alt="" />
                        <hr />
                    </div>
                )
            }
            )
        );
    }
}

export default AppContainer;