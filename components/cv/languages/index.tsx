import { JSX } from "preact";

interface ILanguageProps {
  lang: string;
  level: string;
}

export const LanguageElement = (props: ILanguageProps) => {
  const {
    lang,
    level,
  } = props;
  return (
    <div class="flex flex-col text-xs">
      <div class="work-item text-xs p-1 font-bold flex justify-start items-center text-left">
        {lang}
      </div>
      <p class="px-1 font-italic text-gray-600">{level}</p>
    </div>
  );
};
