import { useState } from "react";
import { AddProps } from "../../types";
import * as C from "./styled";

export const AddArea = ({ handleClick }: AddProps) => {
  const [inputText, setInputText] = useState("");

  const handleTask = () => {
    if (inputText !== "") {
      handleClick(inputText);
      setInputText("");
    }
  };

 
  return (
    <C.Container>
      <C.ButtonS isDesabled={!!inputText.length} disabled={!!inputText.length} onClick={handleTask}>
        +
      </C.ButtonS>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </C.Container>
  );
};
