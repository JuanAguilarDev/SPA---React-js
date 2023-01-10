import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function TodoDetails(props) {
  const { id } = useParams();

  const index = props.todos.findIndex(element => element.id === parseInt(id, 10));

  const todo = props.todos[index];

  return (
    <>
      <div data-testid="todo-details" className="card-header">
        <h1 className="card-header-title header">
          {todo && todo.text}
        </h1 >
      </div>
      <div className="list-wrapper">
        {
          todo && todo.details && todo.details.map((detail, i) => 
            <div data-testid="todo-details-item" key={i} className="list-item">
              { detail }
            </div>
          )
        }
      </div>
    </>
  )
}

TodoDetails.propTypes = {
  todos: PropTypes.array
};

TodoDetails.defaultProps = {
  todos: [],
};

export default TodoDetails;
