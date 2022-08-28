import { useRef } from "react";

function UseRefExp() {
  const inputEl = useRef(null);
  const focusInput = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputEl} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefExp;
