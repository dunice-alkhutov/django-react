var React = require('react')
var ReactDOM = require('react-dom')
var Button = require('react-bootstrap/lib/Button');

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

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadBooksFromServer();
    }, 
    render: function() {
        if (this.state.data) {
            console.log('DATA!')
            var bookNodes = this.state.data.map(function(book){
                return <li>
                        <h4>Author: {book.author}</h4>
                        <p>Title: {book.title} !</p>
                     </li>
            })
        }
        return (
            <div>
                {/*<button onClick={this.loadBooksFromServer}>Refresh list</button>*/}
                <Button bsStyle="primary" bsSize="small" onClick={this.loadBooksFromServer}>Small button</Button>
                <h1>Book list</h1>
                <ul>
                    {bookNodes}
                </ul>
            </div>
        )
    }
})

ReactDOM.render(<BooksList url='/api/'/>, 
    document.getElementById('container'))