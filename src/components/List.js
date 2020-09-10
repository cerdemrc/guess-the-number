import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class List extends Component {
    render() {
        const {guess, end, newGame} = this.props;
        return (
            <div>
            {
                guess.map((item,key) => {
                    return(
                        <div key={key}>
                            <ul className="list-group">
               
                                <li className={`list-group-item ${!item.win ? "list-group-item-danger" : "list-group-item-success"}`}>
                                Tahmininiz : {item.myNumber} {item.message}</li>
                            </ul>
                        </div>
                    )
                })
            }
            <br/><button className={end ? "btn btn-warning btn-block" : "hidden"} onClick={newGame}>Yeni Oyun</button>
            </div>
        )
    }
}

List.propTypes = {
    guess:PropTypes.array.isRequired
}
