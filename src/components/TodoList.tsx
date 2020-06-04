import React, {PropsWithChildren} from 'react';

interface TodoListProps {
  items: {id: string, text: string}[];
  onDeleteTodo: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props: PropsWithChildren<TodoListProps>) => {
  return (
    <ul>
      { props.items.map(t => {
        return (
          <li key={t.id}>
            <span>{t.text}</span>
            <button onClick={() => props.onDeleteTodo(t.id)}>DELETE</button>
          </li>
        );
      }) }
    </ul>
  );
};

export default TodoList;
