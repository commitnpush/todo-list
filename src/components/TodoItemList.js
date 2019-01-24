import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{
  shouldComponentUpdate(nextProps, nextState){
    return this.props.todos !== nextProps.todos;
  }
  render(){
    console.log(1);
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(({id, text, checked, color}) =>(
      <TodoItem
        id={id}
        checked={checked}
        text={text}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
        color={color}/>
    ));
    return(
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;
