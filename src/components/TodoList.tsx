import React from 'react';

const TodoList: React.FC = () => {
  const todos = [{id: "t1", text: "Finish the course"}];
  return (
    <ul>
      { todos.map(t => <li key={t.id}>{t.text}</li>) }
    </ul>
  );
};

export default TodoList;
