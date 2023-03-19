/* Components */
import { Container } from "./TaskRow.style";
import { CheckBox, Input } from "../aux-styles";

/* Logic */
import { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

export default function TaskRow(props) {
  /* Drag and Drop */
  /*   const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK_ROW",
    item: { type: "TASK_ROW", id: props.index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "TASK_ROW",
    hover(item, monitor) {
      console.log(item.id);
      console.log(props.index);
    },
  });

  dragRef(dropRef(ref)); */
  /*  */

  //Terminar DnD !!
  const newIndex = useRef(null);

  const handleSort = (e) => {
    const initialIndex = e.dataTransfer.getData("initialIndex");

    let _tasks = [...props.tasks];

    const [draggedItemContent] = _tasks.splice(initialIndex, 1);
    _tasks.splice(newIndex.current, 0, draggedItemContent);

    props.dispatch({ type: "DragNDrop", payload: _tasks });
  };

  return (
    <Container
      className={props.task.isCompleted === props.disable ? `disable` : ""}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("initialIndex", props.index);
        e.target.classList.add("isDragging");
      }}
      onDrop={(e) => {
        newIndex.current = props.index;
        handleSort(e);

        document
          .getElementsByClassName("isDragging")[0]
          .classList.remove("isDragging");
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <label htmlFor={`checkTask-${props.index}`}>
        <div>
          <Input
            type="checkbox"
            id={`checkTask-${props.index}`}
            onChange={() => {
              props.dispatch({
                type: "toggle-isCompleted",
                payload: props.index,
              });
            }}
            checked={props.task.isCompleted}
          />
          <CheckBox>
            <span className="check"></span>
          </CheckBox>
        </div>

        <p className={props.task.isCompleted ? "task-completed" : ""}>
          {props.task.name}
        </p>
      </label>

      <span
        className="removeTask"
        onClick={() =>
          props.dispatch({ type: "remove-task", payload: props.index })
        }
      ></span>
    </Container>
  );
}
