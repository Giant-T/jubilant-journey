import React from "react";

import "../style/Information.css";

class Information extends React.Component {
    render() {
        return (
            <div className="Info">
                <ul>
                    <li>Gender: {this.props.gender}</li>
                    <li>Age: {this.props.age}</li>
                    <li>Email: {this.props.email}</li>
                    <li>Phone: {this.props.phone}</li>
                </ul>
            </div>
        )
    }
}

export default Information;