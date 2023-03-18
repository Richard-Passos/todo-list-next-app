/* Components */
import { CForm } from "./Form.style";

/* Logic */
import { useRef } from "react";

export default function Form({ dispatch }) {
  const input = useRef();

  return (
    <CForm
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "add-task", payload: input.current.value });
        input.current.value = "";
      }}
    >
      <input type="search" ref={input} placeholder="Create a new todo..." />
    </CForm>
  );
}
