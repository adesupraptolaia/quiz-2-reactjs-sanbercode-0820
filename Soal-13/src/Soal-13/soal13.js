import React from "react";

class Soal13 extends React.Component {
    render() {
        return (
            <div className="soal13">
                <img src={this.props.photo}></img>
                <p>
                    <strong>{this.props.name}</strong>
                </p>
                <p>{this.props.profession}</p>
                <p>{this.props.age} years old</p>
            </div>
        );
    }
}

export default Soal13;
