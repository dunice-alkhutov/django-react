import { Card, Button, CardTitle, CardText, Row, Col  } from 'reactstrap';
import React, { Component } from 'react'
import { Link } from 'react-router'

const BoardCard = (props) => {
  console.log(props)
  let url = `boards/${props.id}`
  return (
    <Col sm="4">
        <Card block>
          <CardTitle>{props.data.title}</CardTitle>
          <CardText>{props.data.description}</CardText>
          <Button><Link to={url}>Go to </Link></Button>
        </Card>
      </Col>
  );
};

export default class Boards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boards: []
        }
    }
    loadBoardsFromServer() {
        $.ajax({
            url: '/api/get_boards/',
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log('data', data)
                this.setState({ boards: data });
            }.bind(this)
        })
    }

    componentDidMount() {
        console.log('here')
        this.loadBoardsFromServer();
    }

    render() {
        if (this.state.boards) {
            var board_r = this.state.boards.map(function (board_, id) {
                return <BoardCard data={board_} id={id} />
            })
        }
        console.log(this)
        return (
            <div className="container">
                <div className='row'>
                    <Button color="primary" onClick={this.loadBooksFromServer}>Refresh</Button>{' '}
                    <h1>Boards</h1>
                    <div className='row'>
                        {board_r}
                    </div>
                </div>
            </div>
        )
  }
}

