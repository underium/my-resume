import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export const Input = (props: JSX.HTMLAttributes<HTMLInputElement>) => {
  const name = props.name || "";
  const displayName = name.charAt(0).toLocaleUpperCase() + name.slice(1);

  return (
    <label for={props.name} class="flex flex-col flex-grow font-bold mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        {displayName}
      </label>
      <input
        {...props}
        disabled={!IS_BROWSER || props.disabled}
        class={`class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"  ${
          props.class ?? ""
        }`}
        id={props.name}
        type={props.type}
        placeholder=""
      />
    </label>
  );
};
