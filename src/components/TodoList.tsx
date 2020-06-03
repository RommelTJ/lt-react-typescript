import React, {PropsWithChildren} from 'react';

interface TodoListProps {
  items: {id: string, text: string}[];
}

const TodoList: React.FC<TodoListProps> = (props: PropsWithChildren<TodoListProps>) => {
  return (
    <ul>
      { props.items.map(t => <li key={t.id}>{t.text}</li>) }
    </ul>
  );
};

export default TodoList;
