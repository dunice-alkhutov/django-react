import React, { Component } from 'react'

export default class BoardPage extends Component {
  render() {
    return (
    <div className="container">
        <div className='row'>
            <p>мазафака</p>
            <p>ID:{this.props.params.board_id}</p>
        </div>
    </div>
    )
  }
}