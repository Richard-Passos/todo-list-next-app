/* Components */
import { ListContainer } from "./List.style";
import { TaskRow } from "./task-row";
import { Actions } from "./aux-styles";

/* Logic */
import { useEffect, useRef, useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function List({ state, dispatch }) {
  const [disable, setDisable] = useState(null); // will disable based on task.IsCompleted
  const radioListAll = useRef();

  useEffect(() => {
    radioListAll.current.checked = true;
  }, []);

  const sensors = [useSensor(PointerSensor)];

  const handleDragEnd = (evt) => {
    const { active, over } = evt;

    if (active.id !== over.id) {
      const _tasks = [...state.tasks];

      const activeIndex = _tasks.findIndex((task) => task.id === active.id);
      const overIndex = _tasks.findIndex((task) => task.id === over.id);

      dispatch({
        type: "DragNDrop",
        payload: arrayMove(_tasks, activeIndex, overIndex),
      });
    }
  };
  return (
    <ListContainer>
      {!state.tasks.length ? (
        <h2 className="no-tasks">Não há tarefas listadas!</h2>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={state.tasks.map((task) => task.id)}
            strategy={verticalListSortingStrategy}
          >
            {state.tasks.map((task, i) => (
              <TaskRow
                key={`key-tasRow-${i}`}
                task={task}
                index={i}
                disable={disable}
                dispatch={dispatch}
                tasks={state.tasks}
              />
            ))}
          </SortableContext>
        </DndContext>
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
    </ListContainer>
  );
}
