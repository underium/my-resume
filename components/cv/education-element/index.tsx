import { JSX } from "preact";

interface IEducationElementProps {
  name: string;
  place: string;
  startDate: string;
  endDate: string | null;
  icon: string;
}

export const EducationElement = (props: IEducationElementProps) => {
  const {
    name,
    place,
    startDate,
    endDate,
    icon,
  } = props;
  return (
    <section class="work-item space-y-2">
      <header class="clear border-l border-red-400 pl-2 border-l-2">
        <label for="work-item-0" class="font-bold">
          {name}
        </label>
        <div class="date font-bold text-sm text-gray-300 lg:text-gray-500 space-x-1">
          <span class="startDate">{startDate}</span>
          <span class="text-gray-300">&nbsp;-&nbsp;</span>
          <span class="endDate">{endDate || "Current"}</span>
        </div>
      </header>
      <div class="item text-body space-y-4" id="work-item">
        <div class="flex flex-row justify-start items-center space-x-4 font-bold">
          <div class="client text-body flex flex-row space-x-1 justify-start items-center">
            <span class="w-4 h-4 flex justify-center items-center text-blue-600">
              <i class={props.icon}></i>
            </span>
            <p class="text-blue-400">{place}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
