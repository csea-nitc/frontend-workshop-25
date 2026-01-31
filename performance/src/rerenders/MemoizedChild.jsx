import {memo, useRef} from "react";

const MemoizedChild = memo(function RenderTracker() {
  const renders = useRef(0);
  renders.current++;

  return <div>Child Rendered: {renders.current} times</div>;
});

export default MemoizedChild;