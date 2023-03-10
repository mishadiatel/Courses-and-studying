import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

interface Props {
  items: Todo[];
  children?: React.ReactNode;
}

const Todos: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.items.map((item: Todo) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
