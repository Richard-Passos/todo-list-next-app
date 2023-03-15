import { useRef } from "react";

export default function Form({ dispatch }) {
  const input = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "add-task", payload: input.current.value });
        input.current.value = "";
      }}
    >
      <input type="search" ref={input} />
    </form>
  );
}
