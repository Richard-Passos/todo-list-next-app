/* Components */
import { Container } from "./TaskRow.style";
import { Reorder } from "@styled-icons/material-rounded";
import { CheckBox, Input } from "../aux-styles";

/* Logic */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function TaskRow(props) {
  const { attributes, listeners, setNodeRef, transition, transform } =
    useSortable({
      id: props.task.id,
    });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Container
      className={props.task.isCompleted === props.disable ? `disable` : ""}
      ref={setNodeRef}
      style={style}
    >
      <span className="reorder">
        <Reorder
          {...listeners}
          {...attributes}
          aria-roledescription={`taskDraggable-${props.task.id}`}
          aria-describedby={`taskContainer-${props.task.id}`}
        ></Reorder>
      </span>

      <label htmlFor={`checkTask-${props.index}`}>
        <div>
          <Input
            type="checkbox"
            name={`checkTask-${props.index}`}
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
