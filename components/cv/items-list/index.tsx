import { JSX } from "preact";

interface IListProps {
  item: string;
  color?: string;
}

export const ItemsListElement = (props: IListProps) => {
  const {
    item,
    color,
  } = props;
  return (
    <div
      class={`work-item text-xs bg-${color || "gray"}-100 border border-${
        color || "gray"
      }-300 p-1 rounded-lg shadow-outline flex justify-center items-center text-center`}
    >
      {item}
    </div>
  );
};
