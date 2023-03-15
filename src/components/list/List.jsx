import { useState } from "react";
import { Container } from "./List.style";

export default function List({ state, dispatch }) {
  const [disable, setDisable] = useState(null); // will disable based on task.IsCompleted

  return (
    <Container>
      {!state.tasks.length ? (
        <h2 className="no-tasks">Não há tarefas listadas!</h2>
      ) : (
        state.tasks.map((task, i) => (
          <div
            className={task.isCompleted === disable ? `disable` : ""}
            key={`key-taskRow-${i}`}
          >
            <label
              htmlFor={`checkTask-${i}`}
              onClick={() =>
                dispatch({ type: "toggle-isCompleted", payload: i })
              }
              key={`key-taskLabel-${i}`}
            >
              <input
                type="checkbox"
                id={`checkTask-${i}`}
                key={`key-taskToggle-${i}`}
              />

              <p
                className={task.isCompleted ? "task-completed" : ""}
                key={`key-taskName-${i}`}
              >
                {task.name}
              </p>
            </label>

            <span
              onClick={() => dispatch({ type: "remove-task", payload: i })}
              key={`key-taskRemove-${i}`}
            >
              X
            </span>
          </div>
        ))
      )}

      <div>
        <p>{/* itens left */}</p>

        <button onClick={() => setDisable(null)}>All</button>
        <button onClick={() => setDisable(true)}>Active</button>
        <button onClick={() => setDisable(false)}>Completed</button>

        <button>Clear Completed</button>
      </div>
    </Container>
  );
}
