import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export const FormButton = (props: JSX.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${
        props.class ?? ""
      }`}
    />
  );
};
