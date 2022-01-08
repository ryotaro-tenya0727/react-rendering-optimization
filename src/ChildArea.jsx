import { memo } from "react";
import { Fragment } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo(({ open, OnClickClose }) => {
  const data = [...Array(2000).keys()];
  console.log("ChildAreaがレンダリング");
  data.forEach(() => {
    console.log("1");
  });

  return (
    <Fragment>
      {open ? (
        <div style={style}>
          <p>子供</p>
          <button onClick={OnClickClose}>閉じる</button>
        </div>
      ) : null}
    </Fragment>
  );
});
