import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoItemList extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    render(){
        const {todos, onToggle, onRemove} = this.props; 

        const todoList = todos.map(
            (data) => (
                <ToDoItem 
                    {...data}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={data.id}
                />
            )
        )

        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default ToDoItemList;