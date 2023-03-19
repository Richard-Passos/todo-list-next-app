/* Components */
import { CList } from "./List.style";
import { TaskRow } from "./task-row";
import { Actions } from "./aux-styles";

/* Logic */
import { useEffect, useRef, useState } from "react";

export default function List({ state, dispatch }) {
  const [disable, setDisable] = useState(null); // will disable based on task.IsCompleted
  const radioListAll = useRef();

  useEffect(() => {
    radioListAll.current.checked = true;
  }, []);

  return (
    <CList>
      {!state.tasks.length ? (
        <h2 className="no-tasks">Não há tarefas listadas!</h2>
      ) : (
        <ul>
          {state.tasks.map((task, i) => (
            <li key={`key-taskRow-${i}`}>
              <TaskRow
                task={task}
                index={i}
                disable={disable}
                dispatch={dispatch}
                tasks={state.tasks}
              />
            </li>
          ))}
        </ul>
      )}

      <Actions>
        <p>
          {state.tasks.filter((task) => !task.isCompleted).length} item(s) left
        </p>

        <div>
          <input
            type="radio"
            name="radio-List"
            id="radio-List-all"
            ref={radioListAll}
            onClick={() => setDisable(null)}
          />
          <label htmlFor="radio-List-all">All</label>
          <input
            type="radio"
            name="radio-List"
            id="radio-List-active"
            onClick={() => setDisable(true)}
          />
          <label htmlFor="radio-List-active">Active</label>
          <input
            type="radio"
            name="radio-List"
            id="radio-List-completed"
            onClick={() => setDisable(false)}
          />
          <label htmlFor="radio-List-completed">Completed</label>
        </div>

        <button onClick={() => dispatch({ type: "remove-completedTasks" })}>
          Clear Completed
        </button>
      </Actions>
    </CList>
  );
}
