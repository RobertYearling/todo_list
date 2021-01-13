import React from 'react';

const Todo = props => {
    const { todo, index, list, setList } = props;

    const onClick = () => {
        setList(() => {
            return list.filter(todo => list.indexOf(todo) !== index);
        });
    }

    const onChange = e => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list])
    };

    return (
        <div className="container">
            <h4>{todo.name}</h4>
            <div className="container">
                <label htmlFor="checkbox">Completed</label>
                <input onChange={onChange} type="checkbox" name="" checked={todo.isComplete} />
                <button onClick={onClick} className="btn btn-med">x</button>
            </div>
        </div>
    );
};

export default Todo;

