import { useReducer, useRef } from "react";
import { Container } from "./Todo.style";

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });
  const input = useRef();

  return (
    <Container>
      <form>
        <input ref={input} />

        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "add-task", payload: input.current.value });
            input.current.value = "";
          }}
        >
          add
        </button>
      </form>

      {!state.tasks.length ? (
        <h2 className="no-tasks">Não há tarefas istadas!</h2>
      ) : (
        state.tasks.map((task, i) => (
          <div key={`key-taskRow-${i}`}>
            <button
              onClick={() =>
                dispatch({ type: "toggle-isCompleted", payload: i })
              }
              key={`key-btnToggle-${i}`}
            >
              completed
            </button>

            <p
              className={task.isCompleted ? "task-completed" : ""}
              key={`key-taskName-${i}`}
            >
              {task.name}
            </p>

            <button
              onClick={() => dispatch({ type: "remove-task", payload: i })}
              key={`key-btnRemove-${i}`}
            >
              remove
            </button>
          </div>
        ))
      )}
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
