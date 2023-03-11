import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

interface Props {
  text: string;
  onRemoveTodo: () => void;
  children?: React.ReactNode;
}

const TodoItem: React.FC<Props> = (props) => {
  return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>;
};

export default TodoItem;
