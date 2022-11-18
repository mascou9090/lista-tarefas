export type Item = {
  id: number;
  name:string;
  done: boolean;
}

export type Props = {
  item: Item;
}

export type AddProps = {
  handleClick: (taskName: string) => void;
}

export type CheckProps = {
  handleCheck: (done: boolean) => void;
}

export type PropsUnil = {
  handleBoolean: (done: boolean,index: number) => void;
  item: Item;
}