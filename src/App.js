import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Pallete from './components/Pallete';
class App extends Component {

  id = 3;

  state = {
    input: '',
    todos: [
      {id:0, text: ' 리엑트 소개', checked: false, color:"#000000"},
      {id:1, text: ' 리액트 소개', checked: true, color:"#000000"},
      {id:2, text: ' 리약트 소개', checked: false, color:"#000000"}
    ],
    color: "black",
    colors: [
      {color:"#343a40", selected: true},
      {color:"#f03e3e", selected: false},
      {color:"#12b886", selected: false},
      {color:"#228ae6", selected: false}
    ]
  }

  handleColor = (e) => {
    console.log(e.target.innerText);
    const {color, colors} = this.state;
    const nextColors = colors.map((color) => {
      if(color.color == e.target.innerText){
        color.selected = true;
      }else
      {
        color.selected = false;
      }
      return color;
    });
    console.log(nextColors);
    this.setState({
      color: e.target.innerText,
      colors:nextColors
    });
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const {input, todos, color} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({id: this.id++,
                          text: input,
                          checked: false,
                          color:color})
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.hadleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; //서택한 객체
    const nextTodos = [...todos];

    //기존의 값들을 복사하고 checked 값을 덮어 쓰기
    nextTodos[index] = {...selected,
                        checked: !selected.checked};
    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id != id)
    });

  }

  render() {
    return (
      <div>
        <TodoListTemplate form={(
          <Form value={this.state.input}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
            onCreate={this.handleCreate}
            color={this.state.color}
          />
          )}
          pallete={(
            <Pallete colors={this.state.colors}
                      onClick={this.handleColor}/>
          )}
        >
          <TodoItemList todos={this.state.todos}
                        onToggle={this.handleToggle}
                        onRemove={this.handleRemove}/>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
