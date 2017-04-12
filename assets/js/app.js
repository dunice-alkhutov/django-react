import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col  } from 'reactstrap';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            route: window.location.hash.substr(1),
            boards: []
        }
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            route: window.location.hash.substr(1)
        })
    }

    

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

}

