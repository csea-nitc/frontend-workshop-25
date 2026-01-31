import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(true);

  return (
    <section>
      <h2>Toggle</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Hello World 👋</p>}
    </section>
  );
}

export default Toggle;