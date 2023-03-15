import { useReducer } from "react";
import { Form } from "../form";
import { List } from "../list";
import { Container } from "./Todo.style";

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });

  return (
    <Container>
      <Form dispatch={dispatch} />

      <List state={state} dispatch={dispatch} />

      <p className="d&d-message">Drag and drop to reorder list</p>
    </Container>
  );
}

const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case "add-task":
      if (payload) {
        state.tasks.push({ name: payload, isCompleted: false });

        return { ...state };
      }

      return { ...state };
    case "remove-task":
      state.tasks.splice(payload, 1);

      return { ...state };
    case "toggle-isCompleted":
      const task = { ...state.tasks[payload] };
      state.tasks[payload] = { ...task, isCompleted: !task.isCompleted };

      return { ...state };
    default:
      return state;
  }
};
