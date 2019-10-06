import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let inputField = e.target.childNodes[0];
        inputField.value !== '' ? this.props.addTodo(this.state) : inputField.value = '';

        
        this.setState({
            content: ''
        })
        
        inputField.value = '';
    }
    render() {
        return (
            <div className="mt-5">
                <p className="mb-0">Add New Todo:</p>
                <form type="text" className="form-group input-group" onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} id="newTodo" className="form-control" placeholder="add todo" />
                    <button className="btn btn-primary">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;