import React from "react";
import axios from "axios";
import Avatar from "./Avatar";
import Information from "./Information"

import "../style/Card.css";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", gender: "", age: "", email: "", phone: "" };
    }

    componentDidMount() {
        axios.get("https://randomuser.me/api",)
            .then((resultat) => {
                console.log(resultat.data.results[0]);
                this.setState({
                    name: resultat.data.results[0].name.first + " " + resultat.data.results[0].name.last,
                    gender: resultat.data.results[0].gender,
                    age: resultat.data.results[0].dob.age,
                    email: resultat.data.results[0].email,
                    phone: resultat.data.results[0].phone,
                    picture: resultat.data.results[0].picture.large
                });
            })
    }

    render() {
        return (
            <div className="Card">
                <Avatar picture={this.state.picture} name={this.state.name} />
                <Information gender={this.state.gender} age={this.state.age} email={this.state.email} phone={this.state.phone} />
            </div>
        );
    }
}

export default (Card);