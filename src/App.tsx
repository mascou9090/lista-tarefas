import { useState } from "react";
import { AddArea } from "./shared/components/AddArea";
import { Header } from "./shared/components/Header";
import { List } from "./shared/components/List-Itens";
import { Item } from "./shared/types";
import * as C from "./style";

export const App = () => {

  const [list, setList] = useState<Item[]>([]);


  const handleClick = (taskName: string) => {
      
    const oldItemList: Item = {
      id:list.length + 1,
      name:taskName,
      done: false
    }

    setList([...list,oldItemList]);
  };

  const handleBoolean = (done: boolean, index: number) => {
    
    const newList = [...list];

    newList.forEach(element => element.id === index ? element.done = !done : null);

    setList(newList);
  }

  console.log(list)
  return (
    <C.Container>
      <C.GlobalStyle />
      <C.Area>
        <Header />
        <AddArea handleClick={handleClick} />
        {list?.map((item, index) => (
          <List key={index} handleBoolean={handleBoolean} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};
