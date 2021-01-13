import React from 'react';

const Input = props => {
    const { list, setList } = props;

    let todo = {
        name: "",
        isComplete: false
    };

    const onChange = e => {
        todo.name = e.target.value;
    };

    const onClick = e => {
        e.preventDefault()
        setList([...list, todo]);
        e.target.value = "";
        todo = "";
    };

    return(
        <div className="container" style={{ display: 'flex'}}>
            <input style={{ width: '600px'}} onChange={onChange} type="text" name="todo" />
            <button className="btn btn-dark btn-block"  onClick={onClick}>Add</button>
        </div>
    );
};

export default Input;