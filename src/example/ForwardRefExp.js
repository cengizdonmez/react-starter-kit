import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />;
});

function UseRefExp() {
  const inputEl = useRef(null);
  const focusInput = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <Input type="text" ref={inputEl} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefExp;
