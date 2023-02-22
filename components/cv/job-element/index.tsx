import { JSX } from "preact";

interface IWorkElementProps {
  name: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  tasks: string[];
  tags: string[];
}

export const JobElement = (props: IWorkElementProps) => {
  const {
    name,
    company,
    position,
    startDate,
    endDate,
    description,
    tasks,
    tags,
  } = props;
  return (
    <section class="work-item space-y-4">
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
            <span class="w-4 h-4 flex justify-center items-center text-blue-400">
              <i class="fa-solid fa-briefcase"></i>
            </span>
            <p class="text-black-400">{company}</p>
          </div>
          <div class="position text-body flex flex-row space-x-1 justify-start items-center">
            <span class="w-4 h-4 flex justify-center items-center text-blue-400">
              <i class="fa-solid fa-laptop-code"></i>
            </span>
            <p class="text-black-400">{position}</p>
          </div>
        </div>
        <div class="summary">
          {description.map((desc) => <p>{desc}</p>)}
        </div>
        <div class="flex flex-col space-y-1">
          <h3 class="font-bold">Major Tasks</h3>
          <div class="highlights flex flex-col space-y-1">
            <ul>
              {tasks.map((task, index) => {
                return (
                  <li>
                    <p class="text-body">{task}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <h3 class="font-bold">
            Core Stack
          </h3>
          <div class="tags grid grid-cols-5 gap-1">
            {tags.map((tag) => (
              <span className="text-xs bg-gray-100 border border-gray-300 p-0.5 rounded-md text-center w-fit">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
