import Todo from "../models/todo";

interface Props {
  text: string;
  children?: React.ReactNode;
}

const TodoItem: React.FC<Props> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
