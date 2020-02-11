import React from 'react';
import TodoList from "./TodoComponents/TodoList";
import TodoForm from "./TodoComponents/TodoForm";
import "./app.css"

const toDos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your stat
  

  constructor(){
    super();
    this.state={
      toDoList:toDos
    }
  }
  completeToDo=(itemId)=>{
    const newArray = this.state.toDoList.map(item=>{
      if(item.id===itemId){
        return {...item,
            completed:!item.completed}
      }else{
        return item
      }
    })
    this.setState({
      toDoList:newArray
    })
  }
  addItem=(item)=>{
    const newItem={
      task:item,
      id:Date.now(),
      completed:false
    }
    this.setState({
      toDoList:[...this.state.toDoList,newItem]
    })
  }
  clearItems=()=>{
    console.log("...deleting")
    const newArray = this.state.toDoList.filter(item=>{
      if(!item.completed){
        return item
      }
    })
    this.setState({
      toDoList:newArray
    })
  }
  render() {
    return (
      <div className="mainWrapper">
        <h2>Welcome to your Todo App!</h2>
        <button className="clear" onClick={()=>this.clearItems()}>Clear Completed</button>
        <TodoForm addItem={this.addItem}/>
        <TodoList toDos={this.state.toDoList} completeToDo={this.completeToDo}/>
      </div>
    );
  }
}

export default App;
