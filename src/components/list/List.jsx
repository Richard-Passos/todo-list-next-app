/* Components */
import { CList } from "./List.style";
import { Actions, Input, CheckBox, TaskRow } from "./aux-styles";

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
        state.tasks.map((task, i) => (
          <TaskRow
            className={task.isCompleted === disable ? `disable` : ""}
            key={`key-taskRow-${i}`}
          >
            <label htmlFor={`checkTask-${i}`} key={`key-taskLabel-${i}`}>
              <div>
                <Input
                  type="checkbox"
                  id={`checkTask-${i}`}
                  onChange={() =>
                    dispatch({ type: "toggle-isCompleted", payload: i })
                  }
                  key={`key-taskToggle-${i}`}
                  checked
                />
                <CheckBox key={`key-taskCheckBox-${i}`}>
                  <span className="check"></span>
                </CheckBox>
              </div>

              <p
                className={task.isCompleted ? "task-completed" : ""}
                key={`key-taskName-${i}`}
              >
                {task.name}
              </p>
            </label>

            <span
              className="removeTask"
              onClick={() => dispatch({ type: "remove-task", payload: i })}
              key={`key-taskRemove-${i}`}
            ></span>
          </TaskRow>
        ))
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
