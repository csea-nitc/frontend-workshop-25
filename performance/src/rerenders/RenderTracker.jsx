import {useRef} from "react";

function RenderTracker() {
  const renders = useRef(0);
  renders.current++;

  return <div>Child Rendered: {renders.current} times</div>;
}

export default RenderTracker