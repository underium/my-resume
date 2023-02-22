import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function RadioButton(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <div class="space-x-2 px-4">
      <input
        type="checkbox"
        id="cbox1"
        value="first_checkbox"
        {...props}
        disabled={!IS_BROWSER || props.disabled}
        class={`inline-block cursor-pointer px-4 py-2 rounded border(gray-500 2) hover:bg-gray-200 disabled:(opacity-50 cursor-not-allowed) ${
          props.class ?? ""
        }`}
      />
      <label class="cursor-pointer" for="cbox1">Export short version</label>
    </div>
  );
}
