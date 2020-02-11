import React from "react";



class TodoForm extends React.Component{
    constructor(){
        super()
        this.state={
            newItem:"",
            initialValue:""
        };
    }

    handleChange=(event)=>{
        this.setState({newItem:event.target.value})
        console.log(this.state.newItem)
    }
    handleSubmit=(event) =>{
        console.log("submiting task")
        event.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({ newItem: ""});
        console.log(this.state.newItem)
    }
    render(){
        return(
            <div className="todoForm__wrapper">
                    <h2>New Task</h2>
                    <form className="todoForm" onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            name="newItem"
                            value={this.state.newItem} 
                            onChange={this.handleChange}
                        />
                        <button>Add</button>
                    </form>

            </div>
        )
    }
}


export default TodoForm;