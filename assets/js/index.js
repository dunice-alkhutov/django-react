var React = require('react')
var ReactDOM = require('react-dom')
var Button = require('react-bootstrap/lib/Button');

import { Card, Button, CardTitle, CardText, Row, Col  } from 'reactstrap';

const Board = (props) => {
    console.log('prop', props)
  return (
      <Col sm="4">
        <Card block>
          <CardTitle>{props.data.title}</CardTitle>
          <CardText>{props.data.description}</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    
  );
};

var BooksList = React.createClass({
    loadBooksFromServer: function(){
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        })
    },

    loadBoardsFromServer: function(){
        $.ajax({
            url: '/api/get_boards/',
            dataType: 'json',
            cache: false,
            success: function(data) {
                console.log('data',data)
                this.setState({boards: data});
            }.bind(this)
        })
    },

    getInitialState: function() {
        return {
            data: [],
            boards: []
        };
    },

    componentDidMount: function() {
        this.loadBoardsFromServer();
    }, 
    render: function() {
        if (this.state.data) {
            console.log('DATA!')
            var board_r = this.state.boards.map(function(board_){
                return <Board data={board_}/>
            })
        }
        return (
            <div>
                {/*<button onClick={this.loadBooksFromServer}>Refresh list</button>*/}
                <Button bsStyle="primary" bsSize="small" onClick={this.loadBooksFromServer}>Small button</Button>
                <h1>Boards</h1>
                <div class='row'>
                    {board_r}
                </div>
            </div>
        )
    }
})

ReactDOM.render(<BooksList url='/api/'/>, 
    document.getElementById('container'))