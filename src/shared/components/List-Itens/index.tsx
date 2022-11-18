import { useState } from "react";
import { PropsUnil } from "../../types";
import * as C from "./style";

export const List = ({ item, handleBoolean }: PropsUnil) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    handleBoolean(isChecked,item.id);
  }

  return (
    <C.Container done={isChecked}>
      <input
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        type="checkbox"
        onClick={toggleCheck}
      />
      <label>{item.name}</label>
    </C.Container>
  );
};
