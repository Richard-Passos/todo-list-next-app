/* Components */
import { Container } from "./TaskRow.style";
import { CheckBox, Input } from "../aux-styles";

export default function TaskRow(props) {
  return (
    <Container
      className={props.task.isCompleted === props.disable ? `disable` : ""}
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
