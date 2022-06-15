import React, { useState, useEffect } from 'react';
import { getTodos } from '../../api/api';
import { Todo } from '../../react-app-env';
import './TodoList.scss';

type Props = {
  onHandlerUserId: (id: number) => void
};

export const TodoList: React.FC<Props> = ({ onHandlerUserId }) => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['all', 'active', 'completed'];

  useEffect(() => {
    getTodos()
      .then(todoItems => {
        setTodos(todoItems);
      });
  }, []);

  const filteredByTitle = todos
    .filter(todo => todo.title.toLowerCase().includes(title.toLowerCase()));

  const visibleTodos = async () => {
    switch (selectedOption) {
      case 'all':
        setTodos(await getTodos());
        break;
      case 'active':
        setTodos((await getTodos()).filter(todo => !todo.completed));
        break;
      case 'completed':
        setTodos((await getTodos()).filter(todo => todo.completed));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    visibleTodos();
  }, [selectedOption]);

  return (
    <div className="TodoList">
      <input
        type="text"
        value={title}
        data-cy="filterByTitle"
        className="input"
        onChange={(event) => {
          const { value } = event.target;

          setTitle(value);
        }}
        placeholder="Enter a todo"
      />

      <div className="select">
        <select
          value={selectedOption}
          onChange={event => setSelectedOption(event.target.value)}
        >
          <option value="" disabled>Choose an option</option>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <h2>Todos:</h2>

      <div className="TodoList__list-container">
        <ul className="TodoList__list" data-cy="listOfTodos">
          {filteredByTitle.map(todo => (
            <li
              className="TodoList__item TodoList__item--unchecked"
              key={todo.id}
            >
              <label>
                <input type="checkbox" readOnly />
                <p>{todo.title}</p>
              </label>

              <button
                className="
                  TodoList__user-button
                  TodoList__user-button--selected
                  button
                "
                type="button"
                data-cy="userButton"
                onClick={() => onHandlerUserId(todo.userId)}
              >
                {`User #${todo.userId}`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
