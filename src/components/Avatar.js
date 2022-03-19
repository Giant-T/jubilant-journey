import React from "react";

import "../style/Avatar.css";

class Avatar extends React.Component {
    render() {
        return (
            <div className="Avatar">
                <img src={this.props.picture} alt="user" />
                <h4>Hi, my name is</h4>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default (Avatar);