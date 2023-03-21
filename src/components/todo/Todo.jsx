/* Components */
import { Container } from "./Todo.style";
import { Form } from "../form";
import { List } from "../list";

/* Logic */
import { useReducer } from "react";
import { setCookie } from "nookies";

export default function Todo({ TASKS }) {
  const [state, dispatch] = useReducer(reducer, {
    tasks: JSON.parse(TASKS) || [],
  });

  return (
    <Container>
      <Form dispatch={dispatch} />

      <List state={state} dispatch={dispatch} />

      <p className="DnD-message">
        Drag and drop <span className="DnD-hamb">≣</span> to reorder list
      </p>
    </Container>
  );
}

let handleIds = 0;

const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case "add-task":
      if (payload) {
        state.tasks.push({
          name: payload,
          isCompleted: false,
          id: `task-${handleIds}`,
        });

        setCookie(null, "TASKS", JSON.stringify([...state.tasks]), {
          maxAge: 86400 * 7,
          path: "/",
        });

        handleIds++;
        return { ...state };
      }

      return { ...state };
    case "remove-task":
      state.tasks.splice(payload, 1);

      setCookie(null, "TASKS", JSON.stringify([...state.tasks]), {
        maxAge: 86400 * 7,
        path: "/",
      });

      return { ...state };
    case "toggle-isCompleted":
      const task = { ...state.tasks[payload] };

      state.tasks[payload] = { ...task, isCompleted: !task.isCompleted };
      setCookie(null, "TASKS", JSON.stringify([...state.tasks]), {
        maxAge: 86400 * 7,
        path: "/",
      });

      return { ...state };
    case "remove-completedTasks":
      const notCompletedTasks = state.tasks.filter((task) => !task.isCompleted);

      setCookie(null, "TASKS", JSON.stringify([...notCompletedTasks]), {
        maxAge: 86400 * 7,
        path: "/",
      });

      return { ...state, tasks: notCompletedTasks };
    case "DragNDrop":
      setCookie(null, "TASKS", JSON.stringify([...payload]), {
        maxAge: 86400 * 7,
        path: "/",
      });

      return { ...state, tasks: [...payload] };
    default:
      return state;
  }
};
