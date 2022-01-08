import { useCallback, useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export const App = () => {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const OnClickOpen = () => setOpen(!open);
  const OnClickClose = useCallback(() => {
    setOpen(false);
  },[]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />

      <br />
      <br />
      <button onClick={OnClickOpen}>表示</button>
      <ChildArea open={open} OnClickClose={OnClickClose} />
    </div>
  );
};
